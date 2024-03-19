"use client";
import axios from "axios";
import { useState } from "react";
import { formValidation, strength } from "@app/formValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login(prop) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function loginSubmit() {
    console.log("clocked");
    const formData = {
      username,
      password,
    };
    try {
      setLoading(true);
      await formValidation.validate(formData, { abortEarly: false });
      let result = await axios.post("/api/login", {
        username,
        password,
      });
      result.data.msg
        ? // localStorage.setItem(
          //     "token",
          //     result.data.msg,
          prop.setToken(result.data.msg)
        : // )
          setLoginError(result.data.error);
      setPasswordError(""), setUsernameError("");
    } catch (error) {
      error.inner
        ? error.inner[0].path === "username"
          ? (setUsernameError(error.inner[0].message), setPasswordError(""))
          : (setPasswordError(error.inner[0].message), setUsernameError(""))
        : (setPasswordError(""), setUsernameError(""));
    } finally {
      setLoading(false);
    }
  }

  function clickOnEnterPress(e) {
    e.key === "Enter" ? loginSubmit() : null;
  }

  return (
    // <div className="flex flex-col p-5 bg-blue-700 text-xl">
    <div className="flex flex-col justify-center w-fit p-5 bg-blue-200 text-xl font-serif rounded-t-2xl w-fit">
      <h1 className="text-4xl pb-5 font-normal">Login</h1>
      {/* <label className="p-3">user name</label> */}
      <input
        className="ps-6 pe-12 py-3 rounded-full"
        placeholder="enter user name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        onKeyUp={clickOnEnterPress}
      />
      <p className="text-red-500 p-2 text-base">{usernameError}</p>
      {/* <label className="p-3">password</label> */}
      <div className="flex w-fit justify-end items-center">
        <input
          placeholder="enter password"
          className="ps-6 pe-12 py-3 w-full rounded-full"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={clickOnEnterPress}
        />
        <div
          className="absolute float-end mx-5 hover:cursor-pointer text-2xl"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      </div>
      <p className="text-red-500 p-2 text-base">
        {passwordError ? passwordError : loginError}
      </p>
      <button
        className={`mt-3 mx-0 p-2 ${
          loading ? "bg-gray-500" : "bg-blue-600"
        } text-white rounded-xl`}
        onClick={loginSubmit}
      >
        submit
      </button>
    </div>
  );
}

export default Login;
