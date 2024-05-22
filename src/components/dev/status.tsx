import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ConfettiComponent from './../intro/confetti';
import { checkForUpdates, VersionDetails } from './checkforupdates';
import settings from '../../../src/content/_settings.json';

const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);
    const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(null);
    const [autoupdatecheck, setAutoupdatecheck] = useState<boolean | null>(null);
    const [WelMsg, setWelMsg] = useState<string | null>(null);
    const [hideContent, setHideContent] = useState<boolean>(false);
    const [showNewPlayer, setShowNewPlayer] = useState<boolean>(false);
    const [timerRemaining, setTimerRemaining] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch autoupdatecheck from the JSON file
            const jsonAutoupdatecheck = settings?.autoupdatecheck || false;
            setAutoupdatecheck(jsonAutoupdatecheck);

            if (jsonAutoupdatecheck) {
                // Fetch version details only if autoupdatecheck is true
                const details = await checkForUpdates();
                setVersionDetails(details);
            }

            const hasSeenNotice = localStorage.getItem('developmentNotice');
            if (!hasSeenNotice) {
                setShowPopup(true);
            }
        };

        fetchData();
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setIsVerified(true);
        setWelMsg("Para más información, sígueme en LinkedIn ❤️");
        setHideContent(true); // Hide existing content
        setShowNewPlayer(true); // Show new Player
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

    const handleVerify = (token: string) => {
        if (token) {
            setIsVerified(true);
        }
    };

    if (!showPopup) {
        return (
            <>
                {hasShownConfetti && isVerified && <ConfettiComponent />}
            </>
        );
    }

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 9999,
                    backdropFilter: 'blur(4px)',
                }}
            >
                <div
                    style={{
                        background: 'transparent',
                        color: '#ffffff',
                        padding: '20px',
                        borderRadius: '10px',
                        maxWidth: '400px',
                        textAlign: 'center',
                    }}
                >
                    {showNewPlayer ? (
                        <Player
                            autoplay
                            loop
                            src="/lottie/linkedin.json"
                            style={{ marginBottom: '20px', width: '300px', height: '300px' }}
                        />
                    ) : (
                        <Player
                            autoplay
                            loop
                            src="/lottie/codingdev.json"
                            style={{ marginBottom: '20px', width: '300px', height: '300px' }}
                        />
                    )}
                    {hideContent ? null : (
                        <>
                            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                            Gracias por visitar mi portafolio.👻
                            </p>
                            <p style={{ fontSize: '14px', marginBottom: '30px' }}>
                            Si encuentra algún problema o error, notifíquelo a{' '}
                                <a href="mailto:briannn97@gmail.com">briannn97@gmail.com</a>
                            </p>
                            {!isVerified ? (
                                <>
                                    <div style={{ marginBottom: '10px', marginLeft: '20px' }}>
                                        <HCaptcha
                                            sitekey="d27bf471-6339-4603-b63f-5ab5fdd96ace"
                                            onVerify={handleVerify}
                                        />
                                    </div>
                                    <p style={{ fontSize: '12px', color: 'red', marginBottom: '10px' }}>
                                    Por favor, complete la verificación.
                                    </p>
                                </>
                            ) : null}
                        </>
                    )}
                    {WelMsg && (
                      <div>
                      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: WelMsg.replace(
                              'LinkedIn',
                              '<a href="https://www.linkedin.com/in/briangelvez97" target="_blank" rel="noopener noreferrer" style="color: #3498db;">LinkedIn</a>'
                            ),
                          }}
                        />
                        <h5>Brian Gelvez 😊</h5>
                      </h2>
                      {timerRemaining !== null && (
                        <p style={{ fontSize: '16px', marginBottom: '10px', color: 'linear-gradient(to right, #3498db, #2ecc71)' }}>
                          Se cierra en: {timerRemaining} segundos.
                        </p>
                      )}
                    </div>
                    )}



                    {!hideContent && (
                        <button
                            onClick={handleHidePopup}
                            disabled={!isVerified}
                            style={{
                                background: 'linear-gradient(to right, #7b68ee, #b22cff)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginTop: '10px',
                            }}
                        >
                              Comprendo
                        </button>
                    )}
                </div>
                {autoupdatecheck && (
                    <div
                        style={{
                            marginTop: '10px',
                            fontSize: '12px',
                            position: 'fixed',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            textAlign: 'center',
                            padding: '10px',
                        }}
                    >
                        {/* <p>
                            Current Version:{' '}
                            {versionDetails ? (
                                <a
                                    href={`https://github.com/muhammad-fiaz/portfolio/releases/tag/v${versionDetails.currentVersion}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {versionDetails.currentVersion}
                                </a>
                            ) : 'Loading...'}{' '}
                            -{' '}
                            {versionDetails && versionDetails.isLatestVersion ? (
                                'Everything is up to date!👻'
                            ) : (
                                <>
                                    {versionDetails ? (
                                        <a
                                            href={versionDetails.releasesUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            New Version {versionDetails.latestVersion} available🎉
                                        </a>
                                    ) : 'Checking for updates...'}
                                </>
                            )}
                        </p> */}
                    </div>
                )}
            </div>
            {hasShownConfetti && isVerified && <ConfettiComponent />}
        </div>
    );
};

export default DevelopmentNotice;
