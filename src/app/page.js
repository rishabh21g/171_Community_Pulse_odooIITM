import React from "react";
import { UserProvider } from "./context/User";

const HomePage = () => {
  return (
    <UserProvider>
      <div>HomePage</div>
    </UserProvider>
  );
};

export default HomePage;
