import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5173/api/", formData);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div className="mx-auto px-4 py-6">
          <div className="text-3xl font-bold text-gray-900 text-center">SignUp</div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border-2 rounded-3xl" />
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border-2 rounded-3xl" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border-2 rounded-3xl" />
      <button type="submit" className="mx-auto flex items-center bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer" onSubmit={handleSubmit}>Sign Up</button>
    </form>

    </div>
  );
}