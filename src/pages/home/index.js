import React from "react";
import { Header, TopBar } from "../../components";

const Home = () => {
  return (
    <div className="flex">
      <Header />
      <main className="w-full">
        <TopBar />
        <div className="content "></div>
      </main>
    </div>
  );
};

export default Home;
