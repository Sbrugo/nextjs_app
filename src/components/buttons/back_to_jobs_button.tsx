"use client";
import React from "react";

const BacktojobsButton = () => {
  return (
    <button
      className="border-2 rounded-2xl border-gray-900 bg-gray-900 text-white font-semibold px-2 py-0.5 w-fit"
      onClick={() => history.back()}
    >
      Back to Jobs
    </button>
  );
};

export default BacktojobsButton;
