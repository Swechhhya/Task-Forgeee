import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "/src/utils/axiosInstance.js";
import { UserContext } from "../../context/userContext";
import { validateEmail } from "../../utils/validation";
import AuthLayout from "../../components/layouts/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let hasError = false;

    // Email validation
    if (!email) {
      setEmailError("Please enter an email address.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Please enter your password.");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) return;

    setGeneralError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, role } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setGeneralError(error.response.data.message);
      } else {
        setGeneralError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%]">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[7px] mb-5 capitalize">
          Please enter your details to Log In.
        </p>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <Input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="jack@example.com"
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}

          {/* Password Input */}
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
          />
          {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}

          {/* General Error */}
          {generalError && <p className="text-red-500 text-xs mt-2">{generalError}</p>}

          {/* Forgot Password link */}
          <div className="flex justify-end mb-3">
            <Link
              to="/forgot-password"
              className="text-sm text-primary underline hover:opacity-80"
            >
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
