import React from "react";
import Windmill from "../Images/windmill.jpeg";

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${Windmill})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh", // Set the background height to the viewport height
  };

  return (
    <div
      className="relative z-10 flex flex-col md:flex-row md:items-center h-screen" // Set the height of the main container to the viewport height
      style={sectionStyle}
    >
      <div className="z-20 mt-6 md:mt-24">
        <div className="text-4xl font-medium ml-10 md:ml-20 bg-windmill">
          <h1>ENERGY</h1>
          <h1 className="ml-4 md:ml-12">CONSULTANCY</h1>
          <h1 className="ml-8 md:ml-32">SERVICES</h1>
        </div>
        <br />
        <br />
        <h1 className="text-white text-2xl md:text-4xl font-bold ml-10 md:ml-20">
          {" "}
          {/* Reduced text size for mobile */}
          "FOR YOUR BETTER
          <br /> <span className="space-y-2 text-green-900">TOMORROW</span>,
          SAVE <br />
          ENERGY <span className="space-y-2 text-blue-500">TODAY</span>"
        </h1>
        <br /> <br />
        <div className="md:pl-2 ml-4 md:ml-20">
          <button className="bg-green-300 rounded-3xl p-3 md:p-4 px-8 md:px-10">
            Know More
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
