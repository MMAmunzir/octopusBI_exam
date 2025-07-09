import React, { useState } from "react";
import pizza from "./../../assets/images/pizza.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "owner" && password === "owner") {
      navigate("/home-owner");
    } else if (username === "customer" && password === "customer") {
      navigate("/home-customer");
    } else {
      toast.error("Login Unsuccess");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#153233]  ">
      <div className="bg-white p-8 rounded-lg  flex flex-col items-center justify-center gap-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
