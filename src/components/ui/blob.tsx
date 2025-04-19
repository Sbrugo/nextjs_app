import React from "react";

const Blob = () => {
  return (
    <div>
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-300 opacity-30 blur-3xl mix-blend-multiply -z-10"></div>
      <div className="absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-pink-200 opacity-30 blur-2xl mix-blend-multiply -z-10"></div>
      <div className="absolute bottom-10 left-20 h-[200px] w-[200px] rounded-full bg-sky-200 opacity-30 blur-2xl mix-blend-multiply -z-10"></div>
    </div>
  );
};

export default Blob;
