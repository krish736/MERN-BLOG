import axios from "axios";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email|| !formData.password){
      return setErrorMessage('Please fill out all fields!')
    }

    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message)
      }
    } catch (error) {}
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap font-semibold dark:text-white text-4xl"
          >
            <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              krish's
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5">
            Welcome to the Blog, you can sign up using email and password or
            google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" outline>
              Sign Up
            </Button>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/signin" className="text-blue-500">
                Sign in
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
