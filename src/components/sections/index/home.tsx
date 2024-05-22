
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Sobre mí"
					preTitle="Synopsis"
					subTitle="Desde temprana edad tengo fascinación por los ordenadores, tuve mi primer ordenador a la edad de 12 años y desde ese momento se encendió una pasión para siempre. Durante mi vida tuve trabajos y profesiones varias. Fui empleado de fabrica metaturgica, vendedor, militar y por ultimo desarrollador 😊. En el año 2020 pase de ser soldado a ser aspirante de la escuela de Subficiales del Ejercito Argentino ¡Iba a realizar la carrera militar!. Lamentablemente duramos poco cursando fisicamente que empezo la pandemia mundial por Covid-19. La pandemia hizo que pase mucho tiempo en mi casa cursando de forma online. Eso hizo que me compre una notebook y vuelva va revivir mi pasion por los ordenadores, cambiando asi el rumbo de mi vida. Este giro inesperado marcó un cambio fundamental en mi trayectoria, llevándome por un nuevo camino lleno de oportunidades y aprendizajes."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/brianmilitar.jpg" width={600} height={800} alt="Brian Gelvez"   loading="eager" />
					</div>
					<div className={about.copy}>
						<CopyBlock
							title="Habilidades"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="Ademas de mi experiencia en el desarrollo de software Full Stack, me enorgullece poseer una serie de habilidades interpersonales y blandas que considero esenciales para mi papel como desarrollador Jr. Mis habilidades técnicas están respaldadas por una sólida base en varias tecnologias JavaScript. Sin embargo, tambien valoro la importancia de las habilidades blandas en cualquier entorno de desarrollo de software. Soy un comunicador efectivo, capaz de comunicar claramente ideas técnicas tanto a colegas como a clientes. Mi capacidad para trabajar bien en equipo y mi disposición para aprender y adaptarme rápidamente a nuevas tecnologías me permiten integrarme fácilmente en cualquier entorno de trabajo. Además, mi pasión por la resolución de problemas y mi atención al detalle garantizan que pueda abordar los desafíos del desarrollo de software con determinación y precisión."
						/>
						<CopyBlock
							title="Desarrollo y proyectos"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="El desarrollo y la ejecución de proyectos son mi pasión. Me encantan los retos de dar vida a las ideas a través de la codificación y convertir los conceptos en soluciones funcionales y robustas. Con una planificación meticulosa, flujos de trabajo eficientes y un buen ojo para los detalles,me gusta garantizar la entrega exitosa de los proyectos, cumpliendo los objetivos y superando las expectativas."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						{/* <CopyBlock
							title="Security and Privacy"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'shield-alt']}
							copy="Security and privacy are paramount in my approach to development. I prioritize the protection of sensitive data and implement robust security measures. By adhering to industry best practices and staying updated on emerging threats, I ensure that users' information is safeguarded. Trust and confidentiality are the cornerstones of my work, fostering secure and private experiences for all."
						/> */}
						<CopyBlock
							title="Aprendizaje y mejoras constantes"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="Tengo una sed insaciable de conocimientos y una pasión por el aprendizaje y el desarrollo continuos. Estar al día de las últimas tendencias del sector y de las tecnologías emergentes me permite mantenerme a la vanguardia. Mediante la búsqueda activa de nuevos retos y la ampliación de mi conjunto de habilidades, supero constantemente los límites de mis capacidades, garantizando que ofrezco soluciones de vanguardia y proporciono información valiosa a los clientes."
						/>



						<BadgesBlock
							title="Investigación y planificación"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="Uno de los aspectos más estimulantes de mi proceso creativo es llevar a cabo una investigación en profundidad y una planificación meticulosa de los proyectos de desarrollo. Desde los sistemas de diseño hasta la estrategia de marca, disfruto con la oportunidad de explorar diversos puntos de contacto de la experiencia del usuario. En mi constante búsqueda por ampliar mis conocimientos y habilidades, me sumerjo en la investigación para mantenerme a la vanguardia de las tendencias del sector. Mediante la planificación estratégica y la ejecución de proyectos, mi objetivo es crear experiencias digitales excepcionales que superen las expectativas y ofrezcan resultados cuantificables."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined}						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'Aprendizaje Autodidacta', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Inteligencia artificial', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'Aprendizaje profundo', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Redes neuronales', type: 'fad', icon: 'devicon' },

];
