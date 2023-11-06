//App.js

import { FormInputs } from './components/FormInputs';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [values, setValues] = useState({
    "username": "",
    "email": "",
    "fullname": "",
    "birthday": "",
    "password": "",
    "confirmPassword": ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username should be 3-16 character and shouldnt include any special character!",
      pattern : "^[A-Za-z0-9]{3,16}$",
      required : true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "its should be valid email!",
      required: true,
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      label: "Fullname",
      errorMessage: "",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "",
      
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[ !@#$%^&* ])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      label: "ConfirmPassword",
      errorMessage: "Passwords dont match",
      pattern: values.password,
      required: true,
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }

  console.log(values)

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInputs>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
