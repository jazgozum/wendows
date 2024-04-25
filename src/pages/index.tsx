import Head from "next/head";
import { Inter } from "@next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import dex from "../../assets/dex.png";
import linkedin from "../../assets/linkedin.png";
import x from "../../assets/x.png";
import tg from "../../assets/tg.png";
import WinForm from "components/WinForm/WinForm";
import { App, RootState, Tab } from "@/types";
import { useSelector } from "react-redux";
import MsgBox from "components/MsgBox/MsgBox";
import Welcome from "@/programs/Welcome";
export default function Home() {
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  

  const iconClicked = () => {
    console.log("Icon Clicked!");
  };
  const handleOpenDex = () => {
    window.open("https://dexscreener.com/", "_blank", "noreferrer");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/williamhgates/",
      "_blank",
      "noreferrer"
    );
  };
  const handleOpenX = () => {
    window.open(
      "https://twitter.com/WendowsonSol",
      "_blank",
      "noreferrer"
    );
  };
  const handleOpenTg = () => {
    window.open(
      "https://t.me/+pvzGPs5AABQ5ODNh",
      "_blank",
      "noreferrer"
    );
  };

 

  return (
    <>
      <Head>
        <title>Wendows - Home Page</title>
        <meta name="description" content="Wendows on SOL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <DesktopIcon
            appID={1}
            doubleClick={iconClicked}
            title="My Computer"
            img={mycomputer}
          />
          <DesktopIcon
            appID={2}
            doubleClick={iconClicked}
            title="Recycling Bin"
            img={bin}
          />
          <DesktopIcon
            appID={3}
            doubleClick={handleOpenLinkedin}
            title="My LinkedIn"
            img={linkedin}
          />
          <DesktopIcon
            appID={4}
            doubleClick={handleOpenDex}
            title="Dexscreener"
            img={dex}
          />
          <DesktopIcon
            appID={5}
            doubleClick={handleOpenX}
            title="Twitter"
            img={x}
          />
          <DesktopIcon
            appID={6}
            doubleClick={handleOpenTg}
            title="Telegram"
            img={tg}
          />
          {Tabs.map((tab, index) => {
            return tab.isMinimized ? (
              <></>
            ) : (
              <WinForm
                key={tab.id}
                id={tab.id}
                title={tab.title}
                message={tab.message}
                icon={tab.Icon}
                zIndex={tab.zIndex}
                programType={tab.program}
                prompt={tab.prompt}
              >
                {tab.program === App.WELCOME ? (
                  <Welcome id={tab.id} />
                )  : tab.program === App.ERROR ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.INFO ? (
                  <MsgBox id={tab.id} message={tab.message} icon={tab.Icon} />
                ) : tab.program === App.WARNING ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.HELP ? (
                  <p>{tab.message}</p>
                ) : null}
              </WinForm>
            );
          })}
        </div>
        <StartBar />
      </main>
    </>
  );
}
