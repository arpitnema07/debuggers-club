"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    username: yup.string().required("username is required"),
    name: yup.string().required("name  is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("email is required"),
    password: yup.string().required("password is required"),
  })
  .required();

const page = () => {
  const router = useRouter();
  const [invalidPassword, setInvalidPassword] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [userNameErr, setUserNameErr] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const userRegister = async (value) => {
    try {
      const { data } = await axios.post(`/api/users/register`, value);
      console.log("data", data);
      router.push("/login");
    } catch (error) {
      if (
        error?.response?.data?.message ===
        "password and confirmPassword must match"
      ) {
        setInvalidPassword(error?.response?.data?.message);
      }
      if (error?.response?.data?.message === "Email already exist!") {
        setEmailError(error?.response?.data?.message);
      }
      if (error?.response?.data?.message === "Username already exist!") {
        setUserNameErr(error?.response?.data?.message);
      }
      console.log("error", error);
    }
  };

  return (
    <>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* MDB */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css"
          rel="stylesheet"
        />
      </head>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(userRegister)}>
                {/*
       <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <p className="lead fw-normal mb-0 me-3">Sign in with</p>
          <button
            type="button"
            className="btn btn-primary btn-floating mx-1"
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-floating mx-1"
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-floating mx-1"
          >
            <i className="fab fa-linkedin-in" />
          </button>
        </div>
        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">Or</p>
        </div>*/}
                {/*User name */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your user name"
                    {...register("username")}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    User name
                  </label>
                </div>
                <hr></hr>
                {userNameErr && <p className="text-red-500">{userNameErr}</p>}
                {errors.name?.message && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}
                {/*Name*/}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                    {...register("name")}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Name
                  </label>
                </div>
                <hr></hr>{" "}
                {errors.name?.message && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    {...register("email")}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                <hr></hr>
                {emailError && <p className="text-red-500">{emailError}</p>}
                {errors.email?.message && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <hr></hr>
                {errors.password?.message && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
                {/* Confirm password*/}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter your confirm password"
                    {...register("confirmPassword")}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Confirm Password
                  </label>
                </div>
                <hr></hr>
                {invalidPassword && (
                  <p className="text-red-500">{invalidPassword}</p>
                )}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link href="/login" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
