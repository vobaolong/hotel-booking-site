import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ListHotel from './pages/listHotel/ListHotel'
import Hotel from './pages/hotel/Hotel.jsx'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<ListHotel />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
