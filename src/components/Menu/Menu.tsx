import * as Accordion from "@radix-ui/react-accordion";
import { MenuProps } from "./Menu.types";
import ProjectList from "../ProjectList/ProjectList";
import projects from "../../assets/projects.json";
import About from "../About";

import styles from "./Menu.module.scss";
import Contact from "../Contact/Contact";

const Menu = ({}: MenuProps) => {
  
  return (
    <Accordion.Root type="multiple" className={styles.Root}>
      <Accordion.Item value={`About`} className={styles.Root__item}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.Root__trigger}>
            <span className={styles.Root__title}>About</span>
            <div className={styles.Root__border} aria-hidden="true" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.Root__content}>
          <About />
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value={`Projects`}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.Root__trigger}>
            <span className={styles.Root__title}>Projects</span>
            <div className={styles.Root__border} aria-hidden="true" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.Root__content}>
          <ProjectList projects={projects} />
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value={`Contact`}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.Root__trigger}>
            <span className={styles.Root__title}>Contact</span>
            <div className={styles.Root__border} aria-hidden="true" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.Root__content}>
          <Contact/>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default Menu;
