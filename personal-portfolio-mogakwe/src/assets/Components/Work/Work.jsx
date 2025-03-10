import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importing icons
import './Work.css';

function Work() {
  const work = [
    {
      image: "/sam1.PNG",
      title: "Responsive E-Commerce Website",
      github: "#github",
      link: "#link",
    },
    {
      image: "/sam2.PNG",
      title: "Responsive Portfolio Website",
      github: "#github",
      link: "#link",
    },
  ];

  return (
    <div className="work_list">
      <h2 className="work_header">Explore My Recent Work</h2>
      <div className="work_container">
        {work.map((item, index) => (
          <div key={index} className="work_item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="work_links">
              <a href={item.github} target="_blank" rel="noopener noreferrer" className="icon_link">
                <FaGithub size={24} /> {/* GitHub Icon */}
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="icon_link">
                <FaExternalLinkAlt size={22} /> {/* External Link Icon */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
