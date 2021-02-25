import styles from "../styles/components/Profile.module.css";

export const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/GabrielBritoAlmeida.png"
        alt="Image with avatar Gabriel Brito"
      />
      <div>
        <strong>Gabriel Francelino</strong>
        <p>
          <img src="icons/level.svg" alt="user level icon" />
          Level 1
        </p>
      </div>
    </div>
  );
};
