"use client";
import React from "react";

const BacktojobsButton = () => {
  return (
    <button
      className="bg-white border border-gray-700 text-gray-900 px-6 py-2 rounded-full hover:bg-purple-950 hover:text-white transition-colors w-fit"
      onClick={() => history.back()}
    >
      Back to Jobs
    </button>
  );
};

export default BacktojobsButton;
