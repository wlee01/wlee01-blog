import React, { useEffect } from "react";
import "./PageStyles.css";

const AboutMe: React.FC = () => {
  useEffect(() => {
    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}%`;
      raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
      document.querySelector('.about-container')?.appendChild(raindrop);

      setTimeout(() => {
        raindrop.remove();
      }, 2000);
    };

    const interval = setInterval(createRaindrop, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      {/* Existing content */}
      {/* ... */}
    </div>
  );
};

export default AboutMe;
