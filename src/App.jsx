import React, { useState, useEffect } from 'react'

function App() {
  const [input, setinput] = useState({
    email: "",
    password: "",

  });
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const validateForm = (inputvalues) => {
    let errors = {};
    if (inputvalues.email.length < 17) {
      errors.email = "Email is not valid";
    }
    if (inputvalues.password.length < 8) {
      errors.password = "Password is not valid";
    }
    return errors
  }

  const handleChange = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(input));
    setSubmit(true);
  };

  const finishSubmit = () => {
    console.log(input);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      finishSubmit();
    }
  }, [errors])


  return <div className="bg-[#01516e]">
    {Object.keys(errors).length === 0 && submit ? (
      <span className="success text-3xl font-bold">Successfully submitted ✓</span>
    ) : null}
    <h1 className="text-3xl font-bold underline text-center p-10 text-">Form Validation</h1>
    <form onSubmit={handleSubmit} >
      <div className="text-center">
        <label htmlFor="email" className='text-xl font-bold'>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={input.email}
          onChange={handleChange}
          className="border-2 border-black rounded-lg w-[50%]"
        />
        <br />
        <label htmlFor="password" className='text-xl font-bold'>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={input.password}
          onChange={handleChange}
          className="border-2 border-black rounded-lg w-[50%] "
        />
        <br />
        <button type="submit" className="bg-white p-2 m-8 text-3xl font-bold rounded-lg hover:bg-sky-700 ">Sign In</button>
      </div>

    </form>
  </div>
}

export default App;
