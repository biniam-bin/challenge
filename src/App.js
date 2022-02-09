import React, { useState } from "react";
import "./Navbar.css";
import "./Form.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import { useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";

var worldMapData = require("city-state-country");

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1 className="logo-text">Your Logo</h1>
        </div>
        <ul className="languages">
          <li className="language">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/46-flags-landmarks/united-states.svg"
              style={{ width: "30px" }}
              alt=""
              srcset=""
            />
          </li>
          <li className="language">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/46-flags-landmarks/spain.svg"
              style={{ width: "30px" }}
              alt=""
              srcset=""
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      zipCode: 0,
      state: "",
      phone: 0,
      who: "",
      what: "",
      whereState: "",
      whereCity: ""
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "first name can't exceed 15")
        .min(3, "first name can't be less than 3")
        .required("first name is required"),
      lastName: yup
        .string()
        .max(15, "last name can't exceed 15")
        .min(3, "last name can't be less than 3")
        .required("last name is required"),
      address: yup.string().required("address is requird"),
      email: yup.string().email("envalid email").required("email required"),
      zipCode: yup.number("Number only").required("zip code required"),
      state: yup
        .string()
        .max(15, "state cant exceed 10 characters")
        .min(2, "state can't be less than 2 characters"),
      // phone: yup
      //   .number()
      //   .max(10, "can't be more than 10")
      //   .min(5, "can't be less than 5 characters")
      //   .required("phone number is required"),
      who: yup
        .string()
        .max(10, "can't exceed 10 characters")
        .min(3, "can't be less than 3 characters")
        .required("required"),
      // what: yup
      //   .string()
      //   .max(2000, "cant exceed 2000 characters")
      //   .min(10, "cant be less than 10 characters")
      //   .required("required"),
      whereState: yup
        .string()
        .max(15, "Only 15 characters are allowed")
        .required("required"),
      whereCity: yup
        .string()
        .max(15, "only 15 characters are allowd")
        .required("required"),
    }),
    onSubmit: (values) => {
      try{

        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
      }catch(err){
        alert(err.messages)
      }
    },
  });
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [whitness, setWhitness] = useState("");
  const [attorney, setAttorney] = useState("");

  const countriesList = worldMapData.getAllCountries();
  const stateList =
    worldMapData.getAllStatesFromCountry(country) !== ""
      ? worldMapData.getAllStatesFromCountry(country)
      : worldMapData.getAllStates();

  // const cityList = worldMapData.getAllCitiesFromState(state).lenght >= 1 ? worldMapData.getAllCitiesFromState(state) : worldMapData.getAllCitiesFromState('Gawr')
  return (
    <div className="main">
      <div className="main-form">
        <form
          action=""
          onSubmit={formik.handleSubmit}
          method="post"
          className="form-container"
        >
          <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>
            Please fill this form
          </h2>

          <div className="select-container">
            <span>Salutation: </span>
            <select name="" id="">
              <option value="Dr">Dr.</option>
              <option value="Miss">Miss.</option>
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Ms">Ms.</option>
              <option value="Mx">Mx.</option>
            </select>
          </div>
          <div className="input-container">
            <span>First Name :</span>
            <input
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              type="text"
            />
          </div>
          <div className="error-message">
            {formik.touched.firstName ? formik.errors.firstName : null}
          </div>
          <div className="input-container">
            <span>Last Name :</span>
            <input
              name="lastName"
              required
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
          <div className="error-message">
            {formik.touched.lastName ? formik.errors.lastName : null}
          </div>

          <div className="input-container" style={{ marginTop: "30px" }}>
            <span> Address : </span>
            <input
              name="address"
              required
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
          <div className="error-message">
            {formik.touched.address ? formik.errors.address : null}
          </div>
          <div className="input-container">
            <span> Email : </span>
            <input
              name="email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              
            />
          </div>
          <div className="error-message">
            {formik.touched.email ? formik.errors.email : null}
          </div>
          <div className="input-container" style={{ marginBottom: "20px" }}>
            <span> Zip code : </span>
            <input
              name="zipCode"
              required
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
          <div className="error-message">
            {formik.touched.zipCode ? formik.errors.zipCode : null}
          </div>

          <div>
            {/*  */}
            {/* <div className="select-container">
              <span>Country : </span>
              <select
                name="Countries"
                id=""
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
              >
                {countriesList.map((country) => {
                  return (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  );
                })}
              </select>
            </div> */}

            {/*  */}
            {/* <div className="select-container">
              <span>State : </span>
              <select
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                id=""
                onChange={formik.handleChange}
              >
                <option value="Zabul">Zabul</option>
                {stateList.map((state) => {
                  return (
                    <option key={state.id} value={state.name}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="error-message">
              {formik.touched.state ? formik.errors.state : null}
            </div> */}

            {/*  */}
            {/* <div className="select-container">
              <span>City : </span>
              <select
                name="city"
                id=""
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              >
                {cityList.map((city) => {
                  return (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </div> */}
            {/*  */}
            {/* <CountryDropdown
              // value={countriesList}
              // onChange={(val) => selectCountry(val)}
            /> */}
            {/* <RegionDropdown
            defaultOptionLabel="Region"
              country={country}
              value={region}
              onChange={(val) => selectRegion(val)}
            /> */}
          </div>
          {/* <div className="input-container">
            <span> Phone : </span>
            <span style={{ display: "flex" }}>
              <select
                name="Phone"
                id=""
                style={{ width: "60px" }}
                onChange={(event) => {
                  // setCountry(event.target.value);
                }}
              >
                {worldMapData.getAllCountries().map((country) => {
                  return (
                    <option key={country.id} value={country.phoneCode}>
                      {country.phoneCode}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                style={{ width: "210px", marginLeft: "3px" }}
              />
            </span>
          </div> */}
          <hr />
          <br />
          <br />

          <div className="input-container">
            <span> Who : </span>
            <input
              name="who"
              required
              value={formik.values.who}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
          {/* <div className="input-container">
            <span> What : </span>
            <textarea
              name="what"
              required
              value={formik.values.what}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="text-area"
              id=""
              cols="35"
              rows="3"
            ></textarea>
          </div> */}
          <div className="error-message">
            {formik.touched.what ? formik.errors.what : null}
          </div>
          <h3 style={{ marginTop: "40px" }}>~~Where~~</h3>
          <div className="input-container">
            <span> State : </span>
            <input
              name="whereState"
              required
              value={formik.values.whereState}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
          <div className="error-message">
            {formik.touched.whereState ? formik.errors.whereState : null}
          </div>
          <div className="input-container">
            <span> City : </span>
            <input
              name="whereCity"
              required
              value={formik.values.whereCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
          </div>
          <div className="error-message">
            {formik.touched.whereCity ? formik.errors.whereCity : null}
          </div>
          <h3>~~~~</h3>
          <div className="input-container">
            <span> When </span>
            <input
              type="date"
              
              value={new Date().toISOString().slice(0, 10)}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="input-container">
            <span> Do you have a witness? </span>
            <select
              name=""
              id=""
              onChange={(event) => {
                setWhitness(event.target.value);
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {whitness === "yes" && (
            <div>
              <div className="input-container">
                <span> witness first name: </span>
                <input type="text" />
              </div>
              <div className="input-container">
                <span> witness last name: </span>
                <input type="text" />
              </div>
            </div>
          )}

          <div className="input-container">
            <span> Do you have an attorney? </span>
            <select
              name=""
              id=""
              onChange={(event) => {
                setAttorney(event.target.value);
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {attorney === "yes" && (
            <div>
              <div className="input-container">
                <span> Name: </span>
                <input type="text" />
              </div>
              <div className="input-container">
                <span> Practice Name: </span>
                <input type="text" />
              </div>
              <div className="input-container">
                <span>Website: </span>
                <input type="text" />
              </div>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
};

export default App;
