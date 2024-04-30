// server.js
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const imageDownloader = require("image-downloader");
const multer = require("multer");



const User = require("./models/User");
const cookieParcer = require("cookie-parser");
const fs = require("fs");
const Place = require("./models/Places");
const Booking = require("./models/Booking");





require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000; // Use environment port or default to 3000
app.use(express.json());
app.use(cookieParcer());
app.use('/uploads' , express.static(__dirname + "/uploads"));



const logger = (req, res, next) => {
    const date = new Date();
    const hours = date.getHours() % 12 || 12; // Get the hours in 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure minutes are always two digits
    const seconds = date.getSeconds().toString().padStart(2, '0'); // Ensure seconds are always two digits
    const meridiem = date.getHours() >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
  
    const formattedTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
  
    console.log(`[${date.toISOString()}] ${formattedTime} ${req.method} ${req.url}`);
    next(); // Call next to pass control to the next middleware in the stack
  };

// Attach the logger middleware to the Express app
app.use(logger);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "alkjndlbasdjbdfsknfjdbs";

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);
// Define routes
app.get("/test", (req, res) => {
  res.send("Hello, World!");
});

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}


app.post("/register", async (req, res) => {
  console.log("inside register");
  // res.send('Hello, World!');
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  // try {

  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // res.json("pass ok");
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }

          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
    // res.json('found');
  } else {
    res.json(" not found");
  }

  // } catch (error) {
  //     res.json(' not found');

  // }
});

app.get("/profile", async (req, res) => {
    // res.json(null);                                 


    const {token} = req.cookies;
    // console.log("---------> cookes " + token)

    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData)=>{

            if(err) throw err;

            // console.log("---------> inside verify1")
            const {name, email, _id} = await User.findById(userData.id);


            res.json({name, email, _id});
            // console.log("---------> inside verify2")


        })
        
    }else{
        res.json(null);                                 

    }


}
);

app.post("/logout",   (req, res) => {
    console.log("sent logput")
    res.cookie('token', '').json(true);

});

app.post("/upload-by-link",  async (req, res) => {

    const {link} = req.body;
    const newName =  "photo"+ Date.now()+'.jpg';

   await imageDownloader.image({
        url : link,
        dest : __dirname+'/uploads/'+newName

        
    })

    res.json (newName)

});

const photoMiddleware = multer({dest : 'uploads/'})
app.post("/upload", photoMiddleware.array('photos', 100), async (req, res) => {

    const uploadFiles = [];
    for (let i = 0; i < req.files.length; i++) {
        const {path, originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length-1];
        const newPath = path + '.' + ext;

        fs.renameSync(path, newPath);

        uploadFiles.push(newPath.replace('uploads/', ''))

        
    }
    console.log(uploadFiles)

    res.json (uploadFiles);



}
);

app.post("/places",  async (req, res) => {

  const {title, address, addedPhoto, description, perks, extraInfo, checkin, checkput, maxGuest , price} = req.body;
  const {token} = req.cookies;
  // console.log("---------> cookes " + token)

  if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData)=>{

          if(err) throw err;

         const placeDoc =  Place.create({
            owner: userData.id,
            title, address, photos:addedPhoto, description, perks, extraInfo, checkin, checkput, maxGuest, price
    
          })




          res.json(placeDoc);
          // console.log("---------> inside verify2")


      })
    }
    // console.log("no tocken");
 


});

app.get("/user-places",  async (req, res) => {
  const {token} = req.cookies;
  // console.log("---------> cookes " + token)

  if (token) {
      jwt.verify(token, jwtSecret, {}, async (err, userData)=>{

          if(err) throw err;
        const {id} = userData;
        res.json(await Place.find({owner:id}));

      })}

});

app.get("/places/:id",  async (req, res) => {
  const {id} = req.params;
  // console.log(id);

  // console.log(await Place.findById(id ));
  res.json(await Place.findById(id));

});

app.put("/places",  async (req, res) => {

  const {token} =  req.cookies;
  const {
    id,
    title, address,  addedPhoto, description, perks, extraInfo, checkin, checkput, maxGuest, price

  } = req.body

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{

        if(err) throw err;

       const placeDoc = await Place.findById(id);
       console.log(placeDoc);
       if (userData.id === placeDoc.owner.toString()) {
        placeDoc.set({
    title, address, photos:addedPhoto, description, perks, extraInfo, checkin, checkput, maxGuest, price

        });
        await placeDoc.save();
         res.json("ok")
        
       }




        // res.json(placeDoc);
        // console.log("---------> inside verify2")


    })
  }

});

app.get("/places",  async (req, res) => {

  res.json(await Place.find())

})

app.get("/places-by-name", async (req, res) => {
  // const { name } = req.query;
  const { name } = req.query;


  console.log(name);


  try {
    let places;
    if (name) {
      // If name parameter is provided, search for places by name
      places = await Place.find({ title: { $regex: new RegExp(name, 'i') } });
    } else {
      // If name parameter is not provided, return all places
      places = await Place.find();
    }
    res.json(places);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal server error' });
    console.error(error);
  }
});


app.post("/bookings",  async (req, res) => {
  const {checkIn,checkOut,numberOfGuests,name,phone,
    place,
    price} = req.body;
    console.log(req.body);
    // const checkOutTimestamp = Date.parse(checkOut);

    const userData = await getUserDataFromReq(req);

    Booking.create({
      place,checkIn,checkOut,numberOfGuests,name,phone,price, user:userData.id
    
    }).then((doc) => {
      console.log(doc)
      res.json(doc);
    })
    .catch((err) => {
      throw err;
    });

});


app.get('/bookings', async (req,res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const userData = await getUserDataFromReq(req);
  res.json( await Booking.find({user:userData.id}).populate('place') );
});


app.get('/availability/:placeId', async (req, res) => {
  const { placeId } = req.params;
  const { checkIn, checkOut } = req.query;

  console.log(checkOut, checkIn);

  try {
    // Convert date strings to Date objects
    const from = new Date(checkIn);
    const to = new Date(checkOut);

    // Check if the dates are valid
    if (isNaN(from.getTime()) || isNaN(to.getTime())) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    // Check if the hotel is available for the given dates
    const bookings = await Booking.find({
      place: placeId,
      checkIn: { $lte: to },
      checkOut: { $gte: from }
    });

    if (bookings.length === 0) {
      // Hotel is available
      res.json({ available: true });
    } else {
      // Hotel is not available
      res.json({ available: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
