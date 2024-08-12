import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.contactNo) errors.contactNo = 'Contact No is required';
    if (!formData.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted');
      // Send request to backend
      // Example: axios.post('/api/contact', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        message: ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-6xl flex-grow">
        <form className="w-full md:w-1/2 p-6 rounded-md bg-gray-700" onSubmit={handleSubmit}>
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
            </div>
            <div className="w-full px-3 mb-6 mt-6">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="w-full px-3 mb-6">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="contactNo"
                name="contactNo"
                type="text"
                placeholder="Enter Contact no"
                value={formData.contactNo}
                onChange={handleChange}
              />
              {errors.contactNo && <p className="text-red-500 text-xs italic">{errors.contactNo}</p>}
            </div>
            <div className="w-full px-3 mb-6">
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-40"
                id="message"
                name="message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-white"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6 w-full bg-gray-900 text-white py-4 flex justify-center">
        <div className="flex space-x-6">
          <a href="mailto:ishwinder.malhotra@gmail.com" className="flex items-center space-x-2">
            <FaEnvelope className="h-6 w-6" />
            <span>ishwinder.malhotra@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ishwinder-singh1/" className="flex items-center space-x-2">
            <FaLinkedin className="h-6 w-6" />
            <span>linkedin.com/in/ishwinder-singh1/</span>
          </a>
          <a href="https://github.com/Ishwinder25" className="flex items-center space-x-2">
            <FaGithub className="h-6 w-6" />
            <span>github.com/Ishwinder25</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
