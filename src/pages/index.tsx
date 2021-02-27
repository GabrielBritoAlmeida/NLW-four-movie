import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownContextProvider } from "../contexts/CountdownContext";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

const App: React.FC = () => {
  return (
    <CountdownContextProvider>
      <div className={styles.container}>
        <Head>
          <title> Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </CountdownContextProvider>
  );
};

export default App;
