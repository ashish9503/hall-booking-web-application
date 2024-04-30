import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../others/userContext';

const LoginPage = () => {

  const [email , setEmail] = useState('');
  const [password , setPasssword] = useState('');
  const [redirect , setRedirect] = useState(false);

  const {setUser} = useContext(UserContext);


 async function handleLogin(ev ) {
  ev.preventDefault();


  try {

   const {data} =  await axios.post('/login', {
      email, 
      password
    });
    setUser(data);
        alert ("login successful. Now you can login")
    setRedirect(true);

  
    
  } catch (error) {
    alert ("login failed. ")

    
  }

  

    
  }


  if(redirect){
    return <Navigate to={'/'} />
  }
 
  // axios.get('/test', );


   
// }
  return (
    <div className='mt-4  grow flex items-center justify-around'>

        <div className=' -mb-64'>

     
        <h1 className=' text-4xl text-center mb-4 '>Login</h1>
        <form  className='max-w-md mx-auto  ' onSubmit={handleLogin}>
            <input type="email"  placeholder='yout@' value={email} onChange={ev => setEmail(ev.target.value)}/>
            <input type="password"  placeholder='sarvottam' value={password} onChange={ev => setPasssword(ev.target.value)}/>
            <button className='primary'>Login</button>
            <div className=' text-center py-2 text-gray-500'>don't hav an account yet? <Link className=' underline text-black' to={'/register'} > Register now</Link>
            </div>

        </form>
        </div>

    </div>
  )
}

export default LoginPage