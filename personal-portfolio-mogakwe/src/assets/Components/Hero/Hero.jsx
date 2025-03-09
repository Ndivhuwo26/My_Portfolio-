import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="hero_left">
          <h2>Hi, I'm Kevin Mogakwe</h2>
          <h1>Professional Full-Stack Developer</h1>
          <p>
            I am a junior <span>full-stack developer</span> with a specialization in front-end development. 
            Having just completed my training, I am eager to step into the professional world. 
            Skilled in building responsive and user-friendly interfaces, as well as handling backend 
            functionalities, I am ready to apply my knowledge, learn from real-world experiences, 
            and contribute to dynamic development teams.
          </p>
          <div className="hero_buttons">
            <button>Hire Me</button>
            <button>View My Projects</button>
          </div>
        </div>
        <div className="hero_right">
          <img src="/home.JPG" alt="Hero" />
        </div>
      </div>
      <div className="hero_bottom">
        <div className="hero_info">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="hero_info">
          <h1>23+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="hero_info">
          <h1>5+</h1>
          <p>Satisfied clients</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
