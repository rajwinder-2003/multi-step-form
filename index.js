import React, { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <>
          <h1>Step 1</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <button onClick={nextStep}>Next</button>
        </>
      );
    case 2:
      return (
        <>
          <h1>Step 2</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>
        </>
      );
    case 3:
      return (
        <>
          <h1>Step 3</h1>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Prev</button>
          <button onClick={() => console.log(formData)}>Submit</button>
        </>
      );
    default:
      return <h1>Error</h1>;
  }
};

export default Form;
