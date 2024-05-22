// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";

export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Educación"
          preTitle="Formación"
          subTitle="Actualmente, me desempeño como desarrollador activo en el entorno de desarrollo JavaScript. A nivel personal, estoy inmerso en el estudio de Python y trabajando en un proyecto utilizando Django Rest Framework."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Educación autodidacta - Tutoriales | Videos | Documentación.
                </h3>

                <h5>Cordoba, Argentina | Enero 2021 - Actualidad</h5>
              </span>
              <p>
                Soy un desarrollador autodidacta. Mi pasión por investigar y
                estudiar me impulsa a profundizar en los temas que me interesan,
                lo que me ha permitido adquirir conocimientos de forma continua
                y autónoma.
              </p>
              <ul className="list-disc pl-8">
                <li>Cursos en línea</li>
                <li>Lectura constante</li>
                <li>Participación comunitaria</li>
                <li>Actualizado con últimas novedades</li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bootcamp Soy Henry.</h3>
                <h5>Cordoba, Argentina | Enero 2023 - Junio 2023</h5>
              </span>
              <p>
                Ingrese al Bootcamp para poner afianzar mis conocimientos y
                realice con éxito el Bootcamp en 6 meses. Colaborando en un
                proyecto final con un equipo de 8 personas en el desarrollo de
                un sitio web Full Stack para la compra y venta de NFTs.
              </p>
              <ul className="list-disc pl-8">
                <li>Creación de API endpoints </li>
                <li>Creación de componentes en React.js / Hooks / Redux</li>
                <li>
                  Implementación de pasarela de pago / impl. de authentication /
                  carro de compras
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}
