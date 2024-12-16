import React, { useState } from "react";
import SignupForm from "../services/signup";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    let errors = {};

    
    if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters long.";
    }

    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

 
    if (formData.role.length < 1) {
      errors.role = "Role cannot be empty.";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors); 
    } else {
      
         const response=await SignupForm(formData)
          
      setError({});
      
    }
  };

  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <div className="flex w-[48rem] h-[24rem] bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
        <div className="w-1/2 h-full">
          <img
            src="https://img.freepik.com/free-photo/rendering-elegant-neoclassical-interior_23-2151059661.jpg?uid=R133959098&ga=GA1.1.908544988.1725524150&semt=ais_hybrid"
            alt="Elegant Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 h-full bg-gray-500 flex justify-center">
          <div className="flex-col mt-5">
            <h1 className="text-2xl text-white m-5">Signup</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col px-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="px-3 py-2 rounded-lg outline-none w-full"
                  onChange={handleChange}
                  value={formData.name}
                />
                {error.name && <span className="text-red-600">{error.name}</span>}
              </div>

              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded-lg outline-none w-full"
                  onChange={handleChange}
                  value={formData.email}
                />
                {error.email && <span className="text-red-600">{error.email}</span>}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="px-3 py-2 rounded-lg outline-none w-full"
                  onChange={handleChange}
                  value={formData.password}
                />
                {error.password && <span className="text-red-600">{error.password}</span>}
              </div>

              <div>
                <input
                  type="text"
                  name="role"
                  placeholder="Enter your role"
                  className="px-3 py-2 rounded-lg outline-none w-full"
                  onChange={handleChange}
                  value={formData.role}
                />
                {error.role && <span className="text-red-600">{error.role}</span>}
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg mt-5 hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
