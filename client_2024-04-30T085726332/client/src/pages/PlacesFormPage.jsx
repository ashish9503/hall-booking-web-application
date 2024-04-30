import React, { useEffect, useState } from 'react'
import AccountNav from '../components/AccountNav';
import PhotoUploader from '../components/PhotoUploader';
import Perks from './Percs';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';



export default function PlacesFormPage() {
    const {id} = useParams();

    const [title , setTitle] = useState('');
    const [address , setAddress] = useState('');
    const [addedPhoto , setAddedPhotos] = useState([]);
    const [photoLink , setPhotoLink] = useState('');
    const [description , setDescription] = useState('');
    const [perks , setPerks] = useState([]);
    const [extraInfo , setExtraInfo] = useState('');
    const [checkin , setCheckIn] = useState('');
    const [checkput , setCheckOut] = useState('');
    const [maxGuest , setMaxGuest] = useState(1);
    const [redirect , setRedirect] = useState(false);
    const [price , setPrice] = useState(100);


    useEffect(()=>{
        if (!id) {
            return;
            
        }

        axios.get('/places/'+id).then((res)=>{
            const {data} = res;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkin);
            setCheckIn(data.checkput);
            setMaxGuest(data.maxGuests);
            setPrice(data.price);




        }

        )
    },[id])


    function inputHeader(text) {
        return (
          <h2 className="text-2xl mt-4" > {text}</h2>
        )
        
      }
      
      function inputDescription(text) {
        return (
          <h2 className="text-gray-500 text-sm" > {text}</h2>
        )
        
      }
      
      
      
      function preInput(header, description) {
        return (
          <>
          {inputHeader(header)}
          {inputDescription(description)}
      
          </>
        )
        
      }
      
      
      
       async function savePlace(ev) {
      
        ev.preventDefault();
        const placeData = {
            title, address, addedPhoto, description, perks, extraInfo, checkin, checkput, maxGuest, price

        }

        if (id) {
          // console.log({id , ...placeData} );
            await axios.put('/places',{id , ...placeData} );
      
            setRedirect(true);
            
        } else {
            await axios.post('/places',placeData );
      
            setRedirect(true);
            
        }
      
        // const placedata = ;

        // console.log();
      
      
      
        
      }


      if (redirect) {
        return <Navigate to={'/account/places'}/>
        
      }


  return (
    <div>
      <AccountNav/>

          <form onSubmit={savePlace}>
            {/* <h2 className="text-2xl mt-4">Title </h2>
            <p className=" text-gray-500 text-sm">
              title for ypur place, should be short and catchy as in
              advertisement
            </p> */}
            {preInput('Title', "title for ypur place, should be short and catchy as in")}

            <input
              type="text"
              placeholder="title, for example : My lovely apartment"
              value={title}
              onChange={ev => setTitle(ev.target.value)}
            />

            {/* <h2 className="text-2xl mt-4">Address</h2>
            <p className=" text-gray-500 text-sm">Address to this place </p> */}
            {preInput('Address', "Address to this place")}
           <input type="text" placeholder="address"  value={address}
              onChange={ev => setAddress(ev.target.value)}id="" />


            {preInput('Photos', "more = better")}

          <PhotoUploader addedPhoto={addedPhoto} onChange={setAddedPhotos}/>

            {/* <h2 className="text-2xl mt-4">Description</h2>
            <p className=" text-gray-500 text-sm">description of place </p> */}
            {preInput('Description', "description of place")}

            <textarea className="" value={description}
              onChange={ev => setDescription(ev.target.value)}/>

            {/* <h2 className="text-2xl mt-4">Perks</h2>
            <p className=" text-gray-500 text-sm">
              Select all the perks of ypur place
            </p> */}
            {preInput('Perks', "Select all the perks of ypur place")}


            <div className=" grid grid-cols-2 mt-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            <Perks selected = {perks} onChange = {setPerks} />
            </div>

            {/* <h2 className="text-2xl mt-4">Wxtra Info</h2>
            <p className=" text-gray-500 text-sm">
              house rules, etc
            </p> */}
            {preInput('Extra Info', "house rules, etc")}

            <textarea value={extraInfo}
              onChange={ev => setExtraInfo(ev.target.value)}/>
{/* 
            <h2 className="text-2xl mt-4">Check in & out time</h2>
            <p className=" text-gray-500 text-sm">
              add check in and out time, remeber to have some time window for cleaning the rrom that between guest
            </p> */}

{preInput('Check in & out time', "add check in and out time, remeber to have some time window for cleaning the rrom that between guest")}


            <div className=" grid gap-2 grid-cols-2 md:grid-cols-4  ">

              <div>
                <h3 className=" mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="14" value={checkin}
              onChange={ev => setCheckIn(ev.target.value)}/>
              </div>


              <div>
                <h3 className=" mt-2 -mb-1">Check out time</h3>
                <input type="text" placeholder="11" value={checkput}
              onChange={ev => setCheckOut(ev.target.value)}/>
              </div>


              <div>
                <h3 className=" mt-2 -mb-1">Max number of guest</h3>
                <input type="number"  value={maxGuest}
              onChange={ev => setMaxGuest(ev.target.value)} />
              </div>

              <div>
                <h3 className=" mt-2 -mb-1">Price for one night</h3>
                <input type="number"  value={price}
              onChange={ev => setPrice(ev.target.value)} />
              </div>

            </div>


              <button className=" primary  my-4">save</button>
          </form>
        </div>
  )
}
