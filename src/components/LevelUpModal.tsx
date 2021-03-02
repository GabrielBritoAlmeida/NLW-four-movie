import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/LevelUpModal.module.css";

export const LevelUpModal: React.FC = () => {
  const { levelUpModalClose, level } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.containerLevelUpModal}>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Voçê alcançou um novo level.</p>

        <button type="button" onClick={levelUpModalClose}>
          <img src="/icons/close.svg" alt="Close Modal" />
        </button>
      </div>
    </div>
  );
};
