import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import RegisterPage from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./others/userContext";
import AccountPage from "./pages/AccountPage";
import PlacesPage from "./pages/PlacesPage";
import ProfilePage from "./pages/AccountPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingPage from "./pages/BookingPage";
import BookingsPage from "./pages/BookingsPage";


axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;


function App() {
  return (

    <UserContextProvider>

    {/* // <div className="p-4"> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage/>} />
          <Route path="/account/places/new" element={<PlacesFormPage/>} />

          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage/>} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />




        </Route>
      </Routes>
    {/* // </div> */}
    </UserContextProvider>
  );
}

export default App;
