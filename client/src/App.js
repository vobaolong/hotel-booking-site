import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Transaction from "./pages/transaction/Transaction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ForgotPassword from "./pages/forgot/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpwd" element={<ForgotPassword />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/transactions" element={<Transaction />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
