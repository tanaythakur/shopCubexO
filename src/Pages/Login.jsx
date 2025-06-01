/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5173/api/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/home'); 
    } catch (error) {
      alert('Signin failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="p-2 border" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign In</button>
      </form>
    </div>
  );
}