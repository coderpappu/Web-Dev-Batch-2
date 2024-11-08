import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../../firebase";

const Signin = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  return (
    <div className="w-full">
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-sm ml-5"
        onClick={signInWithGoogle}
      >
        Sign in wth Google{" "}
      </button>
    </div>
  );
};

export default Signin;
