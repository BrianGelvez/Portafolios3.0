// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";

// Section scss
import technical from "../../../styles/scss/sections/index/about.module.scss";

export default function Technical() {
  return (
    <Section classProp={`${technical.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Programador Web "
          preTitle="Hard Skills"
          subTitle="Como programador creativo, creo experiencias digitales intuitivas utilizando un conjunto de diversas herramientas en desarrollo web"
        />
        <section className={`${technical.content} ${technical.container}`}>
          <div className={technical.copy}>
            <CopyBlock
              title="Pesamiento Lógico"
              icon={["fas", "chart-network"]}
              copy="Con una base solida en el desarrollo de software, aprovecho el pensamiento lógico para abordar cada proyecto. Busco constantemente soluciones innovadoras y me mantengo al día con las últimas tendencias del sector."
              iconClass={technical.icon}
              containerClass={technical.container}
            />

            <BadgesBlock
              title="Software con los que me encanta trabajar"
              copy="Como programador Full Stack autodidacta y apasionado por el desarrollo de proyectos, tengo una comprensión sólida de cómo se diseñan interfaces efectivas y atractivas. Disfruto trabajando con herramientas como VS Code, GitHub Copilot, Figma, etc. Me encanta enfocarme en el diseño y el desarrollo frontend para crear proyectos excepcionales."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />

            <BadgesBlock
              title="Tecnologías con las que me encanta construir"
              copy="Como apasionado de la resolución de problemas, disfruto creando soluciones innovadoras a través de la programación. Desde el desarrollo front-end hasta los sistemas back-end y las API, acepto los retos y me gusta ampliar los límites de lo posible. Estoy siempre dispuesto a aprender y trabajar con una amplia gama de tecnologías para enfrentar cualquier desafío que se presente."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={technical.container}
              headerIcon={technical.icon}
              invertedColor={undefined}
            />
          </div>
          <div className={`${technical.image} ${technical.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="data string background"
              loading="eager"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}
{
  /*Badge Block*/
}
const software = [
  { key: "githubcodespaces", name: "github copilot", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "git", name: "Git(Hub)", type: "devicon" },
  { key: "postman", name: "Postman", type: "devicon" },
  { key: "tailwindcss", name: "Tailwindcss", type: "devicon" },
  { key: "nextjs", name: "Next.js", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
];

const tech = [
	// Lenguajes
	{ key: "typescript", name: "TypeScript", type: "devicon" },
	{ key: "javascript", name: "JavaScript", type: "devicon" },
	{ key: "php", name: "PHP", type: "devicon" },
	{ key: "python", name: "Python", type: "devicon" },
	{ key: "java", name: "Java", type: "devicon" },
	{ key: "csharp", name: "C#", type: "devicon" },
	{ key: "c", name: "C", type: "devicon" },
	{ key: "cplusplus", name: "C++", type: "devicon" },
	{ key: "kotlin", name: "Kotlin", type: "devicon" },
  
	// Herramientas Frontend
	{ key: "react", name: "React", type: "devicon" },
	{ key: "nextjs", name: "NextJS", type: "devicon" },
	{ key: "html5", name: "HTML5", type: "devicon" },
	{ key: "css3", name: "CSS3", type: "devicon" },
	{ key: "tailwindcss", name: "Tailwindcss", type: "devicon" },
	{ key: "jquery", name: "jQuery", type: "devicon" },
	{ key: "vuejs", name: "Vuejs", type: "devicon" },
	{ key: "tailwind", name: "TailwindCSS", type: "devicon" },
	{ key: "bootstrap", name: "Bootstrap", type: "devicon" },
	{ key: "angularjs", name: "AngularJS", type: "devicon" },
  
	// Herramientas Backend
	{ key: "nodejs", name: "NodeJS", type: "devicon" },
	{ key: "wordpress", name: "WordPress", type: "devicon" },
	{ key: "mysql", name: "MySQL", type: "devicon" },
	{ key: "mongodb", name: "MongoDB", type: "devicon" },
	{ key: "django", name: "Django", type: "devicon" },
	{ key: "firebase", name: "Firebase", type: "devicon" },
	{ key: "flask", name: "Flask", type: "devicon" },
  
	// Otras herramientas
	{ key: "git", name: "Git", type: "devicon" },
	{ key: "npm", name: "npm", type: "devicon" },
	{ key: "yarn", name: "Yarn", type: "devicon" },
	{ key: "android", name: "Android", type: "devicon" },
	{ key: "githubcopilot", name: "GitHub Copilot", type: "devicon" }
  ];
  
