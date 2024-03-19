import Login from "@components/Login";
import SignUp from "@components/SignUp";
import { useState } from "react";
function Registration(prop) {
  let { setToken } = prop;
  let [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col items-center w-fit h-screen justify-center p-5">
        {showLogin ? (
          <Login setToken={setToken} />
        ) : (
          <SignUp setToken={setToken} />
        )}
        <div className="bg-blue-200 w-full pb-5 flex items-center justify-center rounded-b-2xl text-xl">
          <p className="pe-2">{showLogin ? "not" : "already"} registered?</p>
          <button
            onClick={() => {
              setShowLogin(!showLogin);
            }}
            className="mx5 underline"
          >
            {showLogin ? "signUp" : "login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
