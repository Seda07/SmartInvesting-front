import FormateForm from "../signUp/FormateForm";
import { useState } from "react";
import { REGISTER_URL } from "../../url";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import React from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    username: "",
    password: "",
  });

  const [isTyping, setIsTyping] = useState({
    first_name: false,
    last_name: false,
    email: false,
    age: false,
    username: false,
    password: false,
  });

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsTyping({
      ...isTyping,
      [name]: true,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setIsTyping({
      ...isTyping,
      [name]: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    console.log("Form data:", formData);
  
    try {
      const response = await api.post(REGISTER_URL, formData);
      if (response.status === 201) {
        setMessage('User created successfully.')
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setMessage('Error occurred during registration.');
    }
  };

  return (
    <>
      <div className="bg-primary p-8 rounded-lg shadow-lg">
      {message && <p className="text-green-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            
            <FormateForm
              label="First name"
              id="first-name"
              name="first_name"
              placeholder="Jane"
              pattern="^[A-Z][a-z]*$"
              required={true}
              hint="First name must start with an uppercase letter."
              value={formData.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              showHint={isTyping.first_name}
            />

            <FormateForm
              label="Last name"
              id="last-name"
              name="last_name"
              placeholder="Smith"
              pattern="^[A-Z][a-z]*$"
              required={true}
              hint="Last name must start with an uppercase letter."
              value={formData.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              showHint={isTyping.last_name}
            />

            <FormateForm
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
              required={true}
              minLength={5}
              hint="Please enter a valid email address."
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              showHint={isTyping.email}
            />

            <FormateForm
              label="Age"
              id="age"
              name="age"
              type="number"
              placeholder="25"
              required={true}
              minLength={2}
              pattern="^(1[6-9]|[2-9][0-9]|100)$"
              hint="Age must be between 16 and 100."
              value={formData.age}
              onChange={handleChange}
              onBlur={handleBlur}
              showHint={isTyping.age}
            />

            <FormateForm
              label="Username"
              id="username"
              name="username"
              placeholder="janesmith"
              minLength={3}
              pattern="\w{3,16}"
              required={true}
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              showHint={isTyping.username}
            />

            <FormateForm
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="********"
              pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
              required={true}
              hint="Must be at least 8 characters, include one uppercase letter, one number, and one special character."
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              showHint={isTyping.password}
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Create U
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-white">
          You already have an account?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-secondary hover:text-yellow-500"
            aria-label="Sign up for a new account"
          >
            Login here
          </a>
        </p>
      </div>
    </>
  );
};

export default SignUp;