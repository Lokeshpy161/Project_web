import React from "react";
import FacultyCard from "./FacultyCard";
import cdimg from "../Images/aunty.png";



const Faculties = () => {
  return (
    <div className="bg-green-200">
      <br/>
      <br/>
      <br/>
      <section style={{ display: "flex", justifyContent: "center" }} >
        <div className="flex space-x-20">
          <FacultyCard
            imageSrc="/docs/images/people/profile-picture-3.jpg"
            name="Amutha"
            title="Dean - FOE"
            buttonText="Know More"
          />
          <FacultyCard
            imageSrc="/docs/images/people/profile-picture-3.jpg"
            name="Dash"
            title="VC"
            buttonText="Know More"
          />
          <FacultyCard
            imageSrc="/docs/images/people/profile-picture-3.jpg"
            name="Big Dash"
            title="Dash"
            buttonText="Know More"
          />
        </div>
      </section>
      <br/>
      <br/>
    </div>
  );
};

export default Faculties;
