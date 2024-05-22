
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';


// Section general blocks
// Spacing util
// Section scss
import looking from '../../../styles/scss/sections/index/looking.module.scss';
import section from '../../../styles/scss/blocks/section.title.module.scss'

export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>Actualmente estoy en busqueda de trabajo.</h4>
				<h2 className={looking.json}>Profesión : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Desarrollador Full Stack</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Desarrollador Frontend</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>Me interesan los puestos de desarrollo Frontend. Tengo sólidos conocimientos en herramientas como Next.js, React, HTML5 y Tailwind CSS.</h4>
				{/* <h2>Fresher <span className={looking.highlight}>User Experience</span> Designer</h2> */}
				{/* <p className="subtitle">with a focus on Product Design.</p> */}
			</Container>
		</Section>
	)
}