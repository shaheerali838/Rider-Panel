import React from "react";

const Login = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-2xl font-bold mb-4">Rider Login</h1>
    <input
      type="email"
      placeholder="Email"
      className="mb-2 p-2 border rounded w-80"
    />
    <input
      type="password"
      placeholder="Password"
      className="mb-4 p-2 border rounded w-80"
    />
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
  </div>
);

export default Login;
