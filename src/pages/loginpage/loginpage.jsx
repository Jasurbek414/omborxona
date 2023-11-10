import React, { useState } from "react";
import "./Loginpage.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
          />
          <i
            className={`toggle-password ${showPassword ? "fa fa-eye-slash" : "fa fa-eye"}`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
