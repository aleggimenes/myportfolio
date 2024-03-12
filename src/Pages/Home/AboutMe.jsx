import React from "react";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div
        className="hero--section--content--box 
      about--section--box"
      >
        <div className="hero--section--content">
          <p classname="section--title">Alessandro</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am Alessandro, a 24-year-old Brazilian developer who recently
            relocated to Portugal in pursuit of my dreams of living and working
            abroad. I am writing to express my interest in opportunities within
            your organization.
          </p>
          <p className="hero--section-description">
            In my previous role in Brazil, I spent 3 years working as a
            fullstack developer, gaining invaluable experience across diverse
            projects such as e-commerce platforms and applications designed to
            streamline essential business processes.
          </p>
          <p className="hero--section-description">
            My proficiency extends to a variety of frameworks, including React,
            React Native, Chakra UI, NodeJS, Adonis, NextJs, PrismaDB, and more.
            I have a comprehensive understanding of both frontend and backend
            technologies, and I am well-versed in working with databases such as
            SQLServer and MySQL.
          </p>
          <p className="hero--section-description">
            Over the course of my career, I have successfully developed projects
            from inception to completion and collaborated effectively within
            project teams. The experience has not only honed my technical skills
            but has also allowed me to build lasting friendships with my
            colleagues. Having moved to Portugal at the end of 2023, I am eager
            to kickstart my career in the European programming industry. I am
            seeking a role that will serve as a catalyst for my professional
            journey in this region.
          </p>
        </div>
      </div>
    </section>
  );
}
