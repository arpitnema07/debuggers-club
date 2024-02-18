"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiHome } from "react-icons/ci";
import { UserContext, useUserContext } from "../context/page";

const page = () => {
  const { user } = useUserContext();
  console.log("user", user);
  const accessToken = Cookies.get("accessToken");
  const { register, handleSubmit, setValue } = useForm();
  const [file, setFile] = useState();
  const [selected, setSelected] = useState();
  const [getImg, setGetImg] = useState([]);
  const [getEmail, setGetEmail] = useState([]);
  const [getUsername, setGetUsername] = useState([]);
  const [showFile, setShowFile] = useState();

  const qualification = ["10+2", "Diploma", "Graduation", "Post-Graduation"];

  const editUserProfile = async (value) => {
    try {
      const formData = new FormData();
      formData.append("profileImage", file);
      formData.append("name", value?.name);
      formData.append("username", value?.username);
      formData.append("phone", value?.phone);
      formData.append("country", value?.country);
      formData.append("state", value?.state);
      formData.append("qualification", selected);
      const { data } = await axios.patch("/api/users/profile", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      getUserData();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getUserData();
    }
  }, []);

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setValue("name", data?.user?.name);
      setValue("username", data?.user?.username);
      setValue("email", data?.user?.email);
      setValue("phone", data?.user?.phone);
      setValue("country", data?.user?.country);
      setValue("state", data?.user?.state);
      setValue("qualification", data?.user?.qualification);
      setGetImg(data?.user?.profileImage);
      setGetEmail(data?.user?.email);
      setGetUsername(data?.user?.username);
    } catch (error) {}
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setShowFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>

      <div className="container rounded bg-white mt-5 mb-5">
        <Link href="/">
          <CiHome />
        </Link>

        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              {showFile ? (
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src={showFile}
                />
              ) : (
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src={
                    getImg
                      ? `/${getImg}`
                      : "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  }
                />
              )}
              <span className="font-weight-bold">{getUsername}</span>
              <span className="text-black-50">{getEmail}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-9 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={handleSubmit(editUserProfile)}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                      {...register("name")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      placeholder="username"
                      {...register("username")}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      {...register("phone")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      {...register("email")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Qualification</label>
                    <select
                      name="qualification"
                      {...register("qualification")}
                      onChange={(e) => setSelected(e.target.value)}
                      className="form-control"
                    >
                      <option>Select you Qualification</option>
                      {qualification?.map((d) => {
                        return <option value={d}>{d}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Profile image</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="enter phone number"
                      {...register("profileImage")}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      {...register("country")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="state"
                      {...register("state")}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
