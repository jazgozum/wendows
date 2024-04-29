import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import dex from "../../assets/dex.png";
import x from "../../assets/x.png";
import tg from "../../assets/tg.png";
import butterfly from "../../assets/butterfly.png";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import wendows from "../../assets/wendows.png";

const INTRO = `Just a WENDOWS on SOL`;


interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Wendows
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Wendows"}
                tooltip="Wendows"
                onClick={handleSwitchView}
              />
               <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/williamhgates/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={dex}
                text={"Dexscreener"}
                tooltip="Dexscreener"
                onClick={() => {
                  window.open(
                    "https://dexscreener.com/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={x}
                text={"Twitter"}
                tooltip="Twitter"
                onClick={() => {
                  window.open(
                    "https://twitter.com/WendowsonSol",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
               <WelcomeIcon
                img={tg}
                text={"Telegram"}
                tooltip="Telegram"
                onClick={() => {
                  window.open(
                    "https://t.me/+njhSfUPmWQ04NTgx",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
             
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>WendowsXP</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="wen"
                src={wendows.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <br></br>
              <br></br>
              <br></br> <br></br> <br></br>
              <p className={styles.subtitle}>{INTRO}</p>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
