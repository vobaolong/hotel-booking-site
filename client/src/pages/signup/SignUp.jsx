import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
      fullName: e.target.fullName.value,
      phoneNumber: e.target.phone.value,
      email: e.target.email.value,
    };

    await axios
      .post("http://localhost:5000/auth/register", user)
      .then((res) => {
        alert("User has been created!");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.data.message.includes("dup key: { username:")) {
          alert("Username already exists. Please use another username!");
        }
        if (error.response.data.message.includes("dup key: { email:")) {
          alert("Email already exists. Please use another email!");
        }
      });
  };

  return (
    <div>
      <div className="signup">
        <form className="lContainer" onSubmit={handleClick}>
          <h1 className="lTitle">Sign Up</h1>
          <div className="item">
            <label>User name</label>
            <input
              className="lInput"
              type="text"
              placeholder="username"
              name="username"
              required
            />
          </div>
          <div className="item">
            <label>Full name</label>
            <input
              className="lInput"
              type="text"
              placeholder="Full Name"
              name="fullName"
              required
            />
          </div>

          <div className="item">
            <label>Email</label>
            <input
              className="lInput"
              type="email"
              placeholder="email"
              name="email"
              required
            />
          </div>
          <div className="item">
            <label>Phone</label>
            <input
              className="lInput"
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
            />
          </div>

          <div className="item">
            <label>Password</label>
            <input
              className="lInput"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>

          <button className="lButton" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
