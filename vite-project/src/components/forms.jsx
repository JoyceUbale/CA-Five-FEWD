import React from "react";
import "./forms.css";

const Forms = () => {
  const initState = {
    firstName: "",
    email: "",
    password: "", 
    confirmPassword: "", 
  };
  const alertState = {
    firstName: "",

    email: "",

  };
  const focusState = {
    firstName: false,
    email: false,
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


      if (formdata.email === "") {
        messageBox.email = "Please Enter your email";
      } else {
        messageBox.email = "";
      }

      if (formdata.password === "") {
        messageBox.password = "Please Enter your password";
      } else if (formdata.password.length < 10) {
        messageBox.password = "Password should be at least 10 characters long";
      } else {
        messageBox.password = "";
      }

      if (formdata.confirmPassword !== formdata.password) {
        messageBox.confirmPassword = "Passwords do not match";
      } else {
        messageBox.confirmPassword = "";
      }

      setAlert(messageBox);
      if (
        messageBox.firstName === "" &&
        messageBox.email === "" &&
        messageBox.password === "" &&
        messageBox.confirmPassword === ""
      ) {
        setRegistrationSuccess(true);
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
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            onFocus={() => handleFocus("password")}
            placeholder="Enter your password"
            style={{ borderColor: focus.password ? "blue" : "#ccc" }}
          />
          <div>{alert.password}</div>
        </label>

        <label htmlFor="">
          <input
            type="password"
            name="confirmPassword"
            value={formdata.confirmPassword}
            onChange={handleChange}
            onFocus={() => handleFocus("confirmPassword")}
            placeholder="Repeat your password"
            style={{ borderColor: focus.confirmPassword ? "blue" : "#ccc" }}
          />
          <div>{alert.confirmPassword}</div>
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