import React, { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleprovider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handeleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}> Signin with Google</button> <br />
      <button onClick={handeleSignout}> Signin Out</button>
      {user && (
        <div>
          <h3>{user ? `Welcome, ${user.displayName}` : "Please sign in"}</h3>

          <img src={user?.photoURL} alt={user?.displayName} />
          <p> Email: {user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
