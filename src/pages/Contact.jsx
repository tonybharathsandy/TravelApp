/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from 'react'
import { useDispatch } from "react-redux";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  let dispatch = useDispatch()

  useEffect(()=>{
            dispatch({type : "removeData", value : {}})
            dispatch({type : "NOCARD", payload : {} })
          }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can integrate API to send form data
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
