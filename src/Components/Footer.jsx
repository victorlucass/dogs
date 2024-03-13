import React from "react";
import styles from "./Footer.module.css";
import DogFooter from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={DogFooter} alt="" />
      <p>Dogs - Todos os direitos reservados.</p>
    </div>
  );
};

export default Footer;
