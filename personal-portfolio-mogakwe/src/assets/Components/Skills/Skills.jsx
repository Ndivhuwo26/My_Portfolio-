import React from "react";
import "./Skills.css";

const topRowLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", alt: "HTML5" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", alt: "CSS3" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
];

const bottomRowLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Tailwind_CSS_logo.svg", alt: "Tailwind CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", alt: "Git" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Visual_Studio_Code_logo.svg", alt: "VS Code" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Bootstrap_logo.svg", alt: "Bootstrap" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/GitHub-logo.svg", alt: "GitHub" },
];

function Skills() {
  return (
    <div className="skills">
      <h2>My Work Tools</h2>

      {/* First Marquee (Left to Right) */}
      <div className="marquee-container">
        <div className="marquee marquee-left">
          <div className="marquee-inner">
            {topRowLogos.map((logo, index) => (
              <div key={index} className="skills-item">
                <img src={logo.src} alt={logo.alt} className="skills-logo" />
                <h3>{logo.alt}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Marquee (Right to Left) */}
      <div className="marquee-container">
        <div className="marquee marquee-right">
          <div className="marquee-inner">
            {bottomRowLogos.map((logo, index) => (
              <div key={index} className="skills-item">
                <img src={logo.src} alt={logo.alt} className="skills-logo" />
                <h3>{logo.alt}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
