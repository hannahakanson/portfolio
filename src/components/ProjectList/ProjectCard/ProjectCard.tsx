import React from "react";
import { ProjectCardProps } from "./ProjectCard.types";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
  title,
  img_src,
  desc,
  link,
  id,
  color,
}: ProjectCardProps) => {
  return (
    <div className={styles.Root}>
      <div className={styles.Root__imgContainer}>
        <img className={styles.Root__img} alt="Project image" src={img_src} />
        <div
          className={`${styles.Root__overlay} ${styles.Root__overlay__default}`}
          style={{ backgroundColor: color }}>
          <h2 className={styles.Root__title}>{title}</h2>
          <p className={styles.Root__desc}>{desc}</p>
          <a
            className={styles.Root__overlay__link}
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            View Live Demo
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
