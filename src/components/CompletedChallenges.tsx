import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/CompletedChallenges.module.css";

export const CompletedChallenges: React.FC = () => {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.containerCompletedChallenges}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
};
