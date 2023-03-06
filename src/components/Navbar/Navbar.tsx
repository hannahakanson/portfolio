import React from "react";
import Marquee from "react-fast-marquee";
import { TfiCommentsSmiley } from "react-icons/tfi";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Root}>
      <Marquee pauseOnHover gradient gradientColor={[255, 131, 96]} speed={40}>
        <div className={styles.Root__text}>
          HI! I&apos;M HANNA, A FRONT END DEVELOPER. WELCOME TO MY PORTFOLIO.{" "}
          <span style={{ marginRight: "2rem" }}>
            <TfiCommentsSmiley size={25} />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Navbar;
