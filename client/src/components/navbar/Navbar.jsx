import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white" }}>
          <span className="logo">larada</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user?.email}</span>
            <Link to="/transactions">
              <button className="navButton">Transaction</button>
            </Link>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/signup">
              <button className="navButton">Signup</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
