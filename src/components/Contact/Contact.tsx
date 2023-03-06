import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.Root}>
      <p className={styles.Root__contactItem}>
        <AiFillMail />

        <a href="mailto:hannahakanson@live.se">hannahakanson@live.se</a>
      </p>

      <p className={styles.Root__contactItem}>
        <AiFillPhone />
        072-17 65 940
      </p>
    </div>
  );
};

export default Contact;
