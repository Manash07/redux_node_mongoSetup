"use client";

import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLogin } from "./redux/reducerSlice/userSlice";
import { Formik, FormikState } from "formik";
import * as Yup from "yup";

// Creating schema for YUP

const schema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Invalid or too short name")
    .max(25, "Too long name")
    .required("Name is required"),

  token: Yup.string()
    .min(4, "Invalid token too short")
    .max(8, "Too long token")
    .required("Token is required "),
});

export default function Home() {
  const dispatch = useDispatch();

  // const [form, setForm] = useState({});

  // const handleForm = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleRegister = async (values, resetForm) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      };

      const res = await fetch("http://localhost:8080/user", requestOptions);
      const data = await res.json();

      if(res.status == 200 && data){

        
        resetForm();

      }
    } catch {

      alert("Regestration failed")
    }
  };

  /*const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(form)

    const response = await fetch("http://localhost:8080/user", {
      method: "POST", // since get method is used in node js

      body: JSON.stringify(form),

      headers: {
        // Headers send additional informations

        "Content-type": "application/json",
      },
    }); 

    //console.log(response);
   // const res = await response.json(); // Since we provided text if json was provided we could have used response.json()

    //console.log(res);
    dispatch(setLogin(form));
  }; */

  return (
    <>
      <h1> Redux Toolkit and MongoDb</h1>
      {/* <p>{JSON.stringify(form)}</p> */}
      <Formik
        validationSchema={schema}
        initialValues={{
          userName: "",
          token: "",
        }}
        onSubmit={(values, { resetForm }) => {

          handleRegister(values, resetForm);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <div className="container">
            <div className="col-md-6">
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    onChange={handleChange}
                    name="userName"
                  />
                  <p className="error">
                    {errors.userName || touched.userName}
                  </p>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Token Number"
                    onChange={handleChange}
                    name="token"
                  />
                  <p className="error">
                    {errors.token || touched.token}
                  </p>
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
