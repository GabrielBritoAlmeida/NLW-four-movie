import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  const percent = percentToNextLevel ? `${percentToNextLevel}%` : 0;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div
          style={{
            width: percent,
          }}
        />

        <span className={styles.currentExperience} style={{ left: "50%" }}>
          {currentExperience ?? 0} xp
        </span>
      </div>
      <span>{experienceToNextLevel ?? 0} xp</span>
    </header>
  );
};
