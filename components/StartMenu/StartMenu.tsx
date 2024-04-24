import styles from "./StartMenu.module.css";
import wendows from "../../assets/wendows.png";
import folder from "../../assets/folder_plain.png";
import StartMenuItem from "components/StartMenuItem/StartMenuItem";
import recentdoc from "../../assets/recentdoc.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_image from "../../assets/folder_image.png";
import folder_music from "../../assets/folder_music.png";
import clipboard from "../../assets/clipboard.png";
import help from "../../assets/help.png";
import search from "../../assets/search.png";
import run from "../../assets/run.png";
import ie from "../../assets/ie.png";
import dex from "../../assets/dex.png";
import linkedin from "../../assets/linkedin.png";
import paint from "../../assets/paint.png";
import arrow from "../../assets/all-programs.ico";
import logoff from "../../assets/logoff.png";
import shutdown from "../../assets/shutdown.png";
import defaultprog from "../../assets/defaultprog.png";
import printerfax from "../../assets/printerfax.png";
import Image from "next/image";

interface StartMenuProps {
  menuControl: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartMenu = ({ menuControl }: StartMenuProps) => {
  const handleOpenGitHub = () => {
    window.open("https://github.com/firwer", "_blank", "noreferrer");
  };
  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/williamhgates/",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <div className={styles.startmenu}>
      <hr className={styles.whitehr} />
      <div className={styles.menutopbar}>
        <Image
          alt="wen"
          src={wendows.src}
          width={55}
          height={55}
          style={{
            border: "2px",
            borderStyle: "solid",
            borderRadius: "3px",
            borderColor: "rgba(222, 222, 222, 0.8)",
            boxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.2)",
            margin: "0 5px 0 5px",
          }}
        />
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            textShadow: "1px 1px #000000",
          }}
        >
          Wei Pin&apos;s PC
        </p>
      </div>
      <hr className={styles.orangehr} />
      <div className={styles.menu}>
        <div className={styles.leftmenu}>
          <div>
            <StartMenuItem
              title="Internet"
              subtitle="Internet Explorer"
              icon={ie}
              type={1}
            />
            <hr className={styles.greyhr} />
            
            <StartMenuItem
              onClick={handleOpenGitHub}
              title="Dexscreemer"
              icon={dex}
              type={2}
            />
            <StartMenuItem
              onClick={handleOpenLinkedin}
              title="My Linkedin"
              icon={linkedin}
              type={2}
            />
            <StartMenuItem title="Paint" icon={paint} type={2} />
          </div>
          <div>
            <hr className={styles.greyhr} />
            <div className={styles.allprograms}>
              All Programs
              <Image
                height={15}
                width={15}
                alt="arrow"
                style={{ marginLeft: "4px" }}
                src={arrow.src}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightmenu}>
          <StartMenuItem title="My Documents" icon={folder} type={3} />
          <StartMenuItem
            title="My Recent Documents"
            icon={recentdoc}
            type={3}
            expanded={true}
          />
          <StartMenuItem title="My Pictures" icon={folder_image} type={3} />
          <StartMenuItem title="My Music" icon={folder_music} type={3} />
          <StartMenuItem title="My Computer" icon={mycomputer} type={3} />
          <hr className={styles.bluehr} />
          <StartMenuItem title="Control Panel" icon={clipboard} type={4} />
          <StartMenuItem
            title="Set Program Access and Defaults"
            icon={defaultprog}
            type={4}
          />
          <StartMenuItem title="Printer and Faxes" icon={printerfax} type={4} />
          <hr className={styles.bluehr} />
          <StartMenuItem title="Help and Support" icon={help} type={4} />
          <StartMenuItem title="Search" icon={search} type={4} />
          <StartMenuItem title="Run..." icon={run} type={4} />
        </div>
      </div>
      <div className={styles.menubtmbar}>
        <div className={styles.systemBtn}>
          <Image
            width={30}
            height={30}
            alt=""
            className={styles.systemBtnIcon}
            src={logoff.src}
          />
          Log Off
        </div>
        <div className={styles.systemBtn}>
          <Image
            width={30}
            height={30}
            alt=""
            className={styles.systemBtnIcon}
            src={shutdown.src}
          />
          Turn Off Computer
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
