import { GetServerSideProps } from "next";

import { HomeTemplate } from "../templates/Home";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownContextProvider } from "../contexts/CountdownContext";

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}
    >
      <CountdownContextProvider>
        <HomeTemplate />
      </CountdownContextProvider>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
    },
  };
};
