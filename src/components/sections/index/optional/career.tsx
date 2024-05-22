// Core packages
import Badges from "../../../utils/badge.list";

// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";
import Education from "./education";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experiencia"
          preTitle="Carrera"
          subTitle="Actualmente, trabajo en el campo del desarrollo de proyectos. Mi objetivo principal es mejorar mis habilidades y ampliar mis conocimientos para adquirir una valiosa experiencia en el desarrollo de proyectos complejos. Me dedico a mejorar continuamente y a mantenerme actualizado con los últimos avances de la industria."
        />
        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Colaborador de Código Abierto & Desarrollador Full Stack
                </h3>
                <h4>Tiempo Completo - Presente</h4>
              </span>
              <p>
                Como Desarrollador Full Stack, mi enfoque actual se encuentra en
                el desarrollo de proyectos complejos. Estoy comprometido a
                mejorar continuamente mis habilidades y ampliar mis
                conocimientos para adquirir una valiosa experiencia en este
                campo. Manteniéndome activamente actualizado con los últimos
                avances y tendencias en la industria, me aseguro de que estoy
                equipado con las herramientas y técnicas necesarias para hacer
                frente a proyectos desafiantes. Mi principal objetivo es
                contribuir eficazmente al desarrollo de aplicaciones
                sofisticadas, aprovechando mi experiencia en tecnologías
                front-end y back-end. Gracias a mi dedicación a la mejora
                continua, me esfuerzo por ofrecer soluciones de alta calidad que
                satisfagan las necesidades cambiantes del sector.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={fullStack}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
        </section>
      </Container>
      <Education />
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "csharp", name: "C#", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "c", name: "C", type: "devicon" },
  { key: "cpp", name: "C++", type: "devicon" },
  { key: "ajax", name: "ajax", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "vuejs", name: "Vuejs", type: "devicon" },
  { key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "npm", name: "NPM", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
  { key: "angularjs", name: "AngularJS", type: "devicon" },
  { key: "android", name: "Android", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
];
