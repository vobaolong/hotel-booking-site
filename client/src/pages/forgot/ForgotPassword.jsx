import React, { useState } from "react";
import "./forgotpwd.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);

    // dispatch(forgotPassword(myForm));
  };

  return (
    <>
      <div className="forgot">
        <div className="lContainer">
          <h1 className="lTitle">Forgot Password</h1>
          <form className="item" onSubmit={forgotPasswordSubmit}>
            <label>Email</label>
            <input
              className="lInput"
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="lButton">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
