import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import ConfettiComponent from "./../intro/confetti";
import { checkForUpdates, VersionDetails } from "./checkforupdates";
import settings from "../../../src/content/_settings.json";

const DevelopmentNotice: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);
  const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(
    null
  );
  const [autoupdatecheck, setAutoupdatecheck] = useState<boolean | null>(null);
  const [WelMsg, setWelMsg] = useState<string | null>(null);
  const [hideContent, setHideContent] = useState<boolean>(false);
  const [showNewPlayer, setShowNewPlayer] = useState<boolean>(false);
  const [timerRemaining, setTimerRemaining] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const jsonAutoupdatecheck = settings?.autoupdatecheck || false;
      setAutoupdatecheck(jsonAutoupdatecheck);

      if (jsonAutoupdatecheck) {
        const details = await checkForUpdates();
        setVersionDetails(details);
      }

      const hasSeenNotice = localStorage.getItem("developmentNotice");
      if (!hasSeenNotice) {
        setShowPopup(true);
      }
    };

    fetchData();
  }, []);

  const handleHidePopup = () => {
    localStorage.setItem("developmentNotice", "true");
    setWelMsg("Para más información, sígueme en LinkedIn ❤️");
    setHideContent(true);
    setShowNewPlayer(true);
    const timeoutDuration = 5000;
    setTimerRemaining(timeoutDuration / 1000);
    const intervalId = setInterval(() => {
      setTimerRemaining((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      setShowPopup(false);
      setHasShownConfetti(true);
      setWelMsg(null);
      setTimerRemaining(null);
    }, timeoutDuration);
  };

  if (!showPopup) {
    return <>{hasShownConfetti && <ConfettiComponent />}</>;
  }

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 9999,
          backdropFilter: "blur(4px)",
        }}
      >
        <div
          style={{
            background: "transparent",
            color: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          {showNewPlayer ? (
            <Player
              autoplay
              loop
              src="/lottie/linkedin.json"
              style={{ marginBottom: "20px", width: "300px", height: "300px" }}
            />
          ) : (
            <Player
              autoplay
              loop
              src="/lottie/codingdev.json"
              style={{ marginBottom: "20px", width: "300px", height: "300px" }}
            />
          )}
          {hideContent ? null : (
            <>
              <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                Gracias por visitar mi portafolios. 🩵
              </p>
              <p style={{ fontSize: "14px", marginBottom: "30px" }}>
                Aqui encontraras toda informacion necesaria sobre mi vida y mi
                experiencia como desarrollador de software 🤗
              </p>
            </>
          )}
          {WelMsg && (
            <div>
              <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: WelMsg.replace(
                      "LinkedIn",
                      '<a href="https://www.linkedin.com/in/briangelvez97" target="_blank" rel="noopener noreferrer" style="color: #3498db;">LinkedIn</a>'
                    ),
                  }}
                />
                <h5>Brian Gelvez 😊</h5>
              </h2>
              {timerRemaining !== null && (
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    color: "linear-gradient(to right, #3498db, #2ecc71)",
                  }}
                >
                  Se cierra en: {timerRemaining} segundos.
                </p>
              )}
            </div>
          )}
          {!hideContent && (
            <button
              onClick={handleHidePopup}
              style={{
                background: "linear-gradient(to right, #7b68ee, #b22cff)",
                color: "#ffffff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Ir al Portafolio
            </button>
          )}
        </div>
        {autoupdatecheck && (
          <div
            style={{
              marginTop: "10px",
              fontSize: "12px",
              position: "fixed",
              bottom: "0",
              left: "0",
              width: "100%",
              textAlign: "center",
              padding: "10px",
            }}
          ></div>
        )}
      </div>
      {hasShownConfetti && <ConfettiComponent />}
    </div>
  );
};

export default DevelopmentNotice;
