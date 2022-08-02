import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <ClipLoader color="#809bce" loading={loading} />
    </div>
  );
};

export default Loading;
