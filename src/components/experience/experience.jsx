import React from "react";
import "./experience.css";
import ListExperiences from "./ListExperiences";

export const experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <ListExperiences />
      </div>
    </section>
  );
};
export default experience;
