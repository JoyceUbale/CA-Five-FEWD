import React from "react";
import "./forms.css";

const Forms = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const alertState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const focusState = {
    firstName: false,
    lastName: false,
    email: false,
    contact: false,
  };

  const [formdata, setFormdata] = React.useState(initState);
  const [alert, setAlert] = React.useState(alertState);
  const [focus, setFocus] = React.useState(focusState);
  const [registationSuccess, setRegistrationSuccess] = React.useState(false);

  function handleChange(e) {
    // console.log(e.target.value)
    const { name, value } = e.target;
    console.log(name, value);
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  }
  function handleFocus(name) {
    setFocus((prevFocusData) => ({ ...prevFocusData, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let messageBox = {};

    //validation
    if (formdata.firstName === "") {
      messageBox.firstName = "Please Enter your first Name";
    } else {
      messageBox.firstName = "";
    }

    if (formdata.lastName === "") {
        messageBox.lastName = "Please Enter your last Name";
      } else {
        messageBox.lastName = "";
      }

      if (formdata.email === "") {
        messageBox.email = "Please Enter your email";
      } else {
        messageBox.email = "";
      }

      if (formdata.contact === "") {
        messageBox.contact = "Please Enter your Contact number";
      } else {
        messageBox.contact = "";
      }

      setAlert(messageBox);
      if(messageBox.firstName=='' && messageBox.lastName=="" && messageBox.email==''&& messageBox.contact==''){
        setRegistrationSuccess(true)
      }
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="firstName"
            value={formdata.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            placeholder="Enter your first name"
            style={{ borderColor: focus.firstName ? "blue" : "#ccc" }}
          />
          <div>{alert.firstName}</div>
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="lastName"
            value={formdata.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus("lastName")}
            placeholder="Enter your last name"
            style={{ borderColor: focus.lastName ? "blue" : "#ccc" }}
          />
          <div>{alert.lastName}</div>
        </label>
        <label htmlFor="">
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            placeholder="Enter your email"
            style={{ borderColor: focus.email ? "blue" : "#ccc" }}
          />
          <div>{alert.email}</div>
        </label>
        <label htmlFor="">
          <input
            type="tel"
            name="contact"
            value={formdata.contact}
            onChange={handleChange}
            onFocus={() => handleFocus("contact")}
            placeholder="Enter your conatct number"
            style={{ borderColor: focus.contact ? "blue" : "#ccc" }}
          />
          <div>{alert.contact}</div>
        </label>
        <button>Register</button>
      </form>
      <div>
        {registationSuccess && (<div>Registration Successfull !!</div>)}
      </div>
    </div>
  );
};

export default Forms