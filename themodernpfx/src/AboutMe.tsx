import React from 'react';
import profilePic from './assets/img/professionalprofilepic.png';

const AboutMe: React.FC = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profilePic} alt="A picture of Sammy Kordi" style={{ width: '150px', borderRadius: '50%' }} />
      <p>
        Hi, I'm Sammy, a passionate web developer with a love for creating sleek and responsive web applications.
        My skills include React, TypeScript, JavaScript, and more. I enjoy solving complex problems and learning
        new technologies to improve my craft.
      </p>
    </section>
  );
};

export default AboutMe;
