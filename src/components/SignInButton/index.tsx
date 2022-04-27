import styles from "./styles.module.scss";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export const SignInButton = () => {
  const isUserloggedIn = true;

  return isUserloggedIn ? (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#04d361" />
      Leonardo Silva
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
};
