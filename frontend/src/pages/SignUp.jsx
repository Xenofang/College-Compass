import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // Later:
    // await registerUser(formData)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Join College Compass
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            required
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-5">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 ml-2 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;