import styles from "../styles/components/ChallengeBox.module.css";

const ChallengeBox: React.FC = () => {
  return (
    <div className={styles.containerChallengeBox}>
      <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios a serem completados
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
      </div>
    </div>
  );
};

export default ChallengeBox;
