import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectListProps } from "./ProjectList.types";

import styles from './ProjectList.module.scss'

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className={styles.Root}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          img_src={project.img_src}
          desc={project.desc}
          link={project.link}
          color={project.color}
          src_code={project.src_code}
        />
      ))}
    </div>
  );
};

export default ProjectList;
