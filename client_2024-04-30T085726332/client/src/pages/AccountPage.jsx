import React, { useContext, useState } from 'react'
import { UserContext } from '../others/userContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from '../components/AccountNav';

export default function ProfilePage() {

  const [redirect, setRedirect] = useState(null);

  const {ready , user, setUser} = useContext(UserContext);

  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout(params) {

    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
    
  }


  if (!ready) {

    return 'loading...';
    
  }

  if (ready && !user && !redirect) {

    return <Navigate to={'/login'}/>
    
  }

  if (redirect) {
    return <Navigate to={redirect}/>
    
  }




  console.log(subpage);


  return (
    <div>
     <AccountNav/>

      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto '>
          Logged in as {user.name} {user.email}

          <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
        </div>
      )} 

{subpage === 'places' && (
  <PlacesPage/>

)}
      
      
      </div>
  )
}
