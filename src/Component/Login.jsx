import React from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleprovider = new GoogleAuthProvider();

const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}> Signin with Google</button>
    </div>
  );
};

export default Login;
