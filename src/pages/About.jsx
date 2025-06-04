import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import RootLayout from "../layouts/rootLayout";
import nosotros from "../assets/nosotros.jpg";
import banner1 from "../assets/devices.jpg";

export default function About(second) {
  return (
    <RootLayout>
      <Hero hero={"nosotros"}></Hero>
      <Section>
        <div class="text">
          <h1>Quiénes Somos</h1>
          <h2>A & R Multiservicios</h2>
          <p>
            En A & R Multiservicios somos un Centro de Servicio Autorizado
            Panasonic. Nos especializamos en diagnóstico, mantenimiento y
            reparación de equipos electrónicos y electrodomésticos. Nuestro
            compromiso es brindarte soluciones confiables, rápidas y eficaces.
          </p>
          <Button style={"buttonSecondary"} texto={"CONOCE MAS..."}></Button>
        </div>
        <div class="image">
          <img width="420" src={nosotros} />
        </div>
      </Section>
      <Section>
        <div class="image">
          <img width="500" src={banner1} />
        </div>
        <div class="text">
          <h1>Servicio Técnico Especializado para Electrodomésticos</h1>
          <p>
            Con más de 5 años de experiencia, brindamos Servicio Técnico
            Especializado para Electrodomésticos, asegurando la mejor atención y
            soluciones efectivas. Nuestro compromiso se refleja en la
            satisfacción de cientos de clientes contentos que confían en nuestra
            calidad y profesionalismo.
          </p>
        </div>
      </Section>
    </RootLayout>
  );
}
