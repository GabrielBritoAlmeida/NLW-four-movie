import styles from "../styles/components/CompletedChallenges.module.css";

export const CompletedChallenges: React.FC = () => {
  return (
    <div className={styles.containerCompletedChallenges}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
};
