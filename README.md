# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



to get data from the form
we can have 3 approach
useState
useRef
FormData

lets check all 3


### useState();
```js 
//App.js

import { FormInputs } from './components/FormInputs';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [userName, setUserName] = useState("");

  console.log(userName);

  return (
    <div className='app'>
      <form>
        <FormInputs placeHolder="userName" setUserName={setUserName}></FormInputs>
        <FormInputs placeHolder="email"></FormInputs>
        <FormInputs placeHolder="FullName"></FormInputs>
        <FormInputs placeHolder="userName"></FormInputs>
      </form>
    </div>
  );
}

export default App;

```


```js 
//FormInputs

import React from 'react'
import './formInputs.css'

export const FormInputs = (props) => {
    return (
        <div className='formInputs'>
            {/* <label>UserName</label> */}
            <input placeholder={props.placeHolder} onChange={e => props.setUserName(e.target.value)}></input>
        </div>
    )
}

```
it is going to render everytime there is type in the inputs.
its not an issue as this project is a single component form validation.

but another approach is useRef();
this doesnt show changes in straight forward, like in form validation only onsubmit it shows changes

```js 
//App.js

import { FormInputs } from './components/FormInputs';
import './App.css';
import React, {useRef} from 'react';

function App() {

  // const [userName, setUserName] = useState("");

  // console.log(userName); setUserName={setUserName}

  const userNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef);
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <FormInputs refer={userNameRef} placeHolder="userName" ></FormInputs>
        <FormInputs placeHolder="email"></FormInputs>
        <FormInputs placeHolder="FullName"></FormInputs>
        <FormInputs placeHolder="userName"></FormInputs>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

```

```js 
//FormatInput

import React from 'react'
import './formInputs.css'

export const FormInputs = (props) => {
    return (
        <div className='formInputs'>
            {/* <label>UserName</label> */}
            <input ref={props.refer} placeholder={props.placeHolder}></input>
        </div>
    )
}
```
![Alt text](image.png)

### FormData()

```js 
//App.js

import { FormInputs } from './components/FormInputs';
import './App.css';
import React, {useRef} from 'react';

function App() {

  // const [userName, setUserName] = useState("");

  // console.log(userName); setUserName={setUserName}

  // const userNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data)
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <FormInputs name="userName" placeHolder="userName" ></FormInputs>
        <FormInputs name="email" placeHolder="email"></FormInputs>
        <FormInputs name="FullName" placeHolder="FullName"></FormInputs>
        <FormInputs name="userName" placeHolder="userName"></FormInputs>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

```


```js 
//FormatInput

import React from 'react'
import './formInputs.css'

export const FormInputs = (props) => {
    return (
        <div className='formInputs'>
            {/* <label>UserName</label> */}
            <input name={props.name} placeholder={props.placeHolder}></input>
        </div>
    )
}

```

![Alt text](image-1.png)


we can still stick to useState. But in a better way

```js 
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
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      label: "Fullname",
    },
    {
      id: 4,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      label: "ConfirmPassword",
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
        {inputs.map((input) => (
          <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInputs>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

```


```js 
//FormatInput

import React from 'react'
import './formInputs.css'

export const FormInputs = (props) => {
    const {label, onChange, id, ...inputProps} = props;
   
    return (
        <div className='formInputs'>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}></input>
        </div>
    )
}

```

//TODO
learn abt useRef
