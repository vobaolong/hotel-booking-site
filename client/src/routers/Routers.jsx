import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Hotel from '../pages/Hotel.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import ResetPassword from '../pages/ResetPassword.jsx';
import HotelDetail from '../pages/HotelDetail.jsx';
import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import Contact from '../pages/Contact.jsx';
import Blog from '../pages/Blog.jsx';
import Destination from '../components/destination/Destination.jsx';
import SinglePage from '../singlePage/SinglePage.jsx';
import BlogSingle from '../components/blog/BlogSingle.jsx';
const Routers = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='hotel' element={<Hotel />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='destination' element={<Destination />} />
      <Route path='singlepage/:id' element={<SinglePage />} />
      <Route path='resetpw' element={<ResetPassword />} />
      <Route path='hotel/:id' element={<HotelDetail />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blogsingle/:id' element={<BlogSingle />} />
    </Routes>
  )

}

export default Routers
