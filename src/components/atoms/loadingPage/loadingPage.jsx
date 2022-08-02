import React from "react";
import { BarLoader } from "react-spinners";

const LoadingPage = ({ loading }) => {
  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="font-rubik font-medium text-xl animate-pulse">
        Loading ...
      </h1>
      <BarLoader color="#809bce" loading={loading} />
    </div>
  );
};

export default LoadingPage;
