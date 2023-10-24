import React from "react";
import cdimg from "../Images/aunty.png";

const FacultyCard = ({ imageSrc, name, title, buttonText }) => {
  return (
    <div className="max-w-sm bg-white border border-white rounded-lg shadow flex flex-col justify-center items-center">
      <a href="https://lokesh-port.netlify.app">
        <img
          className="p-8 rounded-t-lg"
          src={cdimg}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-7 text-center">

        <a href="https://lokesh-port.netlify.app">
          <h5 className="text-xl pb-1 font-semibold tracking-tight text-gray-900 dark:text-green-800">{name}</h5>
          <h5 className="text-xl pb-1 font-semibold tracking-tight text-gray-900 dark:text-green-800">{title}</h5>
        </a>

        <div className="flex items-center justify-center">
          <a
            href="https://lokesh-port.netlify.app"
            className="text-white hover:text-green-800 bg-green-700 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-800 dark:hover:bg-green-200 dark:focus:ring-green-200">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
