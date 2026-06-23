import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [disabled, setdisabled] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setdisabled(true);
      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("authChange"));
      
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
      setdisabled(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-gray-500 text-center mb-6">
          Login to College Compass
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={disabled}
            className={`w-full py-3 rounded-lg text-white ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {disabled ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-5">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 ml-2 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
