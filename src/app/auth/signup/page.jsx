import { supabase } from "@/app/services/supabaseClient";
import React from "react";

const Signup = () => {
  const signInWithGoogle = async () => {
    const { data: user, error: err } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (err) {
      console.log("Something went wrong: " + err);
    } else {
      console.log(user);
    }
    return <div>
      
    </div>;
  };
};
export default Signup;
