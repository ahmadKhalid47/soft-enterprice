"use client";
import { setCookies } from "@app/registration/auth";
import { formValidation, strength } from "@app/registration/formValidation";
import axios from "axios";
import { useState } from "react";

function SignUp(prop) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rewritePassword, setRewritePassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rewritePasswordError, setRewritePasswordError] = useState("");
  const [signUpError, setSignUpError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordErrorColor, setPasswordErrorColor] = useState("");

  const signUpSubmit = async () => {
    let formData = {
      username,
      password,
      rewritePassword,
    };
    try {
      setLoading(true);
      await formValidation.validate(formData, { abortEarly: false });
      if (rewritePassword === password) {
        let result = await axios.post("/api/signUp", {
          username,
          password,
        });
        result.data.msg
          ? (setCookies(result.data.msg),
            prop.setTokenVerifierTrigger(prop.tokenVerifierTrigger + 1),
            prop.setUserId(result.data.userId))
          : setSignUpError(result.data.error);
      } else {
        setUsernameError("");
        setPasswordError("");
        setRewritePasswordError("passwords did not matched");
      }
    } catch (error) {
      error.inner
        ? error.inner[0].path === "username"
          ? (setUsernameError(error.inner[0].message), setPasswordError(""))
          : (setPasswordError(error.inner[0].message), setUsernameError(""))
        : (setPasswordError(""), setUsernameError(""));
    } finally {
      setLoading(false);
    }
  };

  function handlePasswordOnchange(e) {
    setPassword(e.target.value);
    password
      ? strength(password, setPasswordError, setPasswordErrorColor)
      : null;
  }

  function clickOnEnterPress(e) {
    e.key === "Enter" ? signUpSubmit() : null;
  }

  return (
    <div className="flex flex-col justify-center w-fit p-5 bg-blue-200 text-xl font-serif rounded-t-2xl">
      <h1 className="text-4xl pb-5 font-normal">SignUp</h1>
      {/* <label className="p-3">user name</label> */}
      <input
        className="ps-6 pe-12 py-3 rounded-full"
        type="text"
        placeholder="enter user name"
        onChange={(e) => setUsername(e.target.value)}
        onKeyUp={clickOnEnterPress}
      />
      <p className="text-red-500 p-2 text-base">{usernameError}</p>
      {/* <label className="p-3">password</label> */}
      <input
        className="ps-6 pe-12 py-3 rounded-full"
        placeholder="enter password"
        type="text"
        onChange={(e) => handlePasswordOnchange(e)}
        onKeyUp={clickOnEnterPress}
      />
      <p className={`${passwordErrorColor} p-2 text-base`}>{passwordError}</p>
      {/* <label className="p-3">rewrite password</label> */}
      <input
        className="ps-6 pe-12 py-3 rounded-full"
        type="text"
        placeholder="rewrite password"
        onChange={(e) => setRewritePassword(e.target.value)}
        onKeyUp={clickOnEnterPress}
      />
      <p className="text-red-500 p-2 text-base">{rewritePasswordError}</p>
      <p className="text-red-500 p-2 text-base">{signUpError}</p>
      <button
        className={`mt-3 mx-0 p-2 ${
          loading ? "bg-gray-500" : "bg-blue-600"
        } text-white rounded-xl`}
        onClick={signUpSubmit}
        disabled={loading}
      >
        submit
      </button>
    </div>
  );
}

export default SignUp;
