import React from "react";
import { UserProvider } from "./context/User";

const HomePage = () => {
  return (
    <UserProvider>
      <div className="text-3xl font-bold underline">HomePage Community Pulse</div>

    </UserProvider>
  );
};

export default HomePage;
