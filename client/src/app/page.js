"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLogin } from "./redux/reducerSlice/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(form)

    const response = await fetch("http://localhost:8080/users", {
      method: "POST", // since get method is used in node js

      body: JSON.stringify(form),

      headers: {
        // Headers send additional informations

        "Content-type": "application/json",
      },
    });

    //console.log(response);
    const res = await response.json(); // Since we provided text if json was provided we could have used response.json()

    //console.log(res);
    //dispatch(setLogin(form));
  };

  return (
    <>
      <h1> Redux Toolkit Tutorial </h1>
      {/* <p>{JSON.stringify(form)}</p> */}
      <div className="container">
        <div className="col-md-6">
          <form autoComplete="off" onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
                onChange={handleForm}
                name="userName"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Token Number"
                onChange={handleForm}
                name="token"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
