
import Login from "@components/Registration/Login";
import SignUp from "@components/Registration/SignUp";
import { useState } from "react";
function Registration(prop) {
  let { setTokenVerifierTrigger, tokenVerifierTrigger, setUserId } = prop;
  let [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col items-center w-fit h-screen justify-center p-5">
        {showLogin ? (
          <Login
            setTokenVerifierTrigger={setTokenVerifierTrigger}
            tokenVerifierTrigger={tokenVerifierTrigger}
            setUserId={setUserId}
          />
        ) : (
          <SignUp
            setTokenVerifierTrigger={setTokenVerifierTrigger}
            tokenVerifierTrigger={tokenVerifierTrigger}
            setUserId={setUserId}
          />
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
