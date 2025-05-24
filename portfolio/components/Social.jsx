import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Devbegginer" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/caio-passos/" },
];
const Social = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <a 
              key={index} 
              href={item.path} 
              target="_blank" 
              rel="noopener noreferrer"
              className={iconStyles}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    );
  };
  

export default Social;  