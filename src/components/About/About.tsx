import React from "react";
import {
  SiTypescript,
  SiCss3,
  SiReact,
  SiJavascript,
  SiFigma,
  SiHtml5
} from "react-icons/si";
import { DiSass } from "react-icons/di";

import styles from "./About.module.scss";

const size = 40;

const About = () => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__textContainer}>
        <h2>Hello there!</h2>
        <p>
          Hey there, welcome to my portfolio! I'm a front-end developer and
          UX/UI enthusiast who's ready to take the world by storm (or at least,
          create some awesome websites and apps). I'm currently wrapping up my
          studies at Medieinstitutet in Malmö after two years. When
          I'm not coding I'm most likely watching RuPaul's drag race or solving
          crosswords.
        </p>
      </div>

      <div className={styles.Root__imgContainer}>
        <img className={styles.Root__img} alt="Picture of me" src='./images/hanna-hakanson.jpg' />
      </div>

      <div className={styles.Root__textContainer}>
        <h2>Skills</h2>
        <div className={styles.Root__iconContainer}>
          <SiTypescript color="#00487C" size={size} />
          <SiJavascript color="#FFE70A" size={size} />
          <SiHtml5 color="#FF8360" size={size} />
          <SiCss3 color="#3CDBD3" size={size} />
          <SiReact color="#00FFF5" size={size} />
          <SiFigma color="#73628A" size={size} />
          <DiSass color="#D35269" size={size} />
        </div>
      </div>
    </div>
  );
};

export default About;
