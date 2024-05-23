import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/*
                Author: Brian Gelvez
                 GitHub: Visit the GitHub repository at https://github.com/BrianGelvez for more details.
                 license: MIT License
                  */}
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Web Brian Gelvez 👨‍💻</title>
                {/* <meta name="description"
                      content="Brian Gelvez - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."/> */}

                {/*These are need for PWA*/}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-title" content="Brian Gelvez"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="msapplication-tap-highlight" content="no"/>

                <meta name="theme-color" content="#000000"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <link rel="canonical" href="https://github.com/BrianGelvez"/>
                <meta name="license" content="MIT License"/>
                <meta httpEquiv="content-language" content="en-us"/>

                <link rel="preconnect" href="https://github.com/BrianGelvez"/>

                <link rel="dns-prefetch" href="https://github.com/BrianGelvez"/>

                <meta name="author" content="Brian Gelvez"/>

                <link rel="alternate" hrefLang="en" href="https://github.com/BrianGelvez"/>

                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="bingbot" content="index, follow"/>

                <link rel="apple-touch-icon" href="/img/logo_rounded.png"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg"/>
                <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="manifest" href="/manifest.json"/>

                <meta property="og:title" content="Brian Gelvez" key="title"/>
                {/* <meta property="og:description"
                      content="Brian Gelvez - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."/> */}
                <meta property="og:image" content="https://github.com/BrianGelvez/Portafolios3.0/blob/main/public/brianmilitar.jpg?raw=true"/>
                <meta property="og:image:secure_url" content="https://github.com/BrianGelvez/Portafolios3.0/blob/main/public/brianmilitar.jpg?raw=true"/>
                <meta property="og:image:type" content="image/jpeg"/>
                <meta property="og:image:alt" content="Brian Gelvez"/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>
                <meta property="og:url" content="https://github.com/BrianGelvez"/>
                <meta property="og:type" content="website"/>
                <meta property="og:profile" content="https://github.com/BrianGelvez"/>
                <meta property="og:site_name" content="Brian Gelvez"/>
                <meta property="og:locale" content="en_US"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="https://twitter.com/"/>
                <meta name="twitter:title" content="Brian Gelvez"/>
                {/* <meta name="twitter:description"
                      content="Brian Gelvez - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."/> */}
                <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/75434191?v=4"/>
                <meta name="twitter:creator" content="https://twitter.com/"/>
                <meta name="twitter:domain" content="https://github.com/BrianGelvez"/>

                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136'/>

                {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
                <meta name="keywords" content="
    Brian Gelvez, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Brian Gelvez Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Brian Gelvez Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Brian Gelvez Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Brian Gelvez DevOps, IT Portfolio, Web Developer Portfolio, Brian Gelvez Developer,
    Full Stack Engineer Brian Gelvez, Brian Gelvez Coding, Brian Gelvez IT,
    Brian Gelvez Full Stack Developer, Brian Gelvez Software Engineer, Brian Gelvez DevOps Engineer,
    Brian Gelvez Programming, Brian Gelvez Software Development, Brian Gelvez Coding Projects,
    Brian Gelvez Tech Portfolio, Brian Gelvez IT Portfolio, Brian Gelvez Software Engineer Portfolio,
    Brian Gelvez Web Developer Portfolio, Brian Gelvez DevOps Portfolio, Brian Gelvez Full Stack Engineer,
    Brian Gelvez Full Stack Developer Portfolio, Brian Gelvez Coding Portfolio, Brian Gelvez Programming Portfolio,
    Brian Gelvez Software Development Portfolio, Brian Gelvez Technology Projects,
    Brian Gelvez Computer Science, Brian Gelvez Cloud Computing, Brian Gelvez IT Professional,
    Brian Gelvez Technology Enthusiast, Brian Gelvez Computer Programmer, Brian Gelvez Code Portfolio,
    Brian Gelvez Technology Student, Brian Gelvez Software Architect,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,
"/>
                {/*use your own ads sense code here*/}
                <meta name="google-adsense-account" content="ca-pub-2040560600290490"/>
                <Script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040560600290490`}
                    strategy="lazyOnload"
                    crossOrigin="anonymous"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Brian Gelvez",
          "url": "https://github.com/BrianGelvez",
          "sameAs": [
            "https://github.com/BrianGelvez",
            "https://www.linkedin.com/in/briangelvez97/"
          ],
          "jobTitle": "Full Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Brian Gelvez Portfolio"
          }
        }`,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://github.com/BrianGelvez",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://github.com/BrianGelvez{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }`,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Brian Gelvez?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brian Gelvez is a dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies does Brian Gelvez work with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brian Gelvez works with a range of technologies including full-stack development, cloud computing, DevOps, AI/ML, and design."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I find Brian Gelvez's portfolio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brian Gelvez's portfolio can be found at https://portafolios3-0.vercel.app/"
              }
            }
          ]
        }`,
                    }}
                />
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6G1F0H30J4"/>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6G1F0H30J4');`}
                </Script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}