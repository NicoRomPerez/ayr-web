import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import RootLayout from "../layouts/rootLayout";
import nosotros from "../assets/nosotros.jpg";
import banner1 from "../assets/devices.jpg";
import { TbEyeStar } from "react-icons/tb";
import { GrGrow } from "react-icons/gr";

export default function About(second) {
  return (
    <RootLayout>
      <Hero hero={"nosotros"}></Hero>

      <Section>
        <div class="text">
          <h2>A & R Multiservicios</h2>
          <p>
            {/* En A & R Multiservicios somos un Centro de Servicio Autorizado
            Panasonic. Nos especializamos en diagnóstico, mantenimiento y
            reparación de equipos electrónicos y electrodomésticos. Nuestro
            compromiso es brindarte soluciones confiables, rápidas y eficaces. */}
            En A y R contamos con{" "}
            <b>
              más de 5 años de experiencia brindando soluciones integrales en
              climatización y aire acondicionado
            </b>{" "}
            para todo tipo de infraestructuras, desde hogares y apartamentos
            hasta oficinas y espacios comerciales. Nos especializamos también en
            el diagnóstico, mantenimiento y reparación de equipos electrónicos y
            electrodomésticos como televisores, lavadoras, neveras y más.
          </p>

          {/* <Button style={"buttonSecondary"} texto={"CONOCE MAS..."}></Button> */}
        </div>
        <div class="image">
          <img width="420" src={nosotros} />
        </div>
      </Section>

      <Section>
        <div class="text">
          <h1>
            “Somos el fabricante número uno de electrodomésticos en el mundo.”
          </h1>
        </div>
        <div class="image">
          <img width="420" src={nosotros} />
        </div>
      </Section>
      <Section>
        <div class="text">
          <h2>Nuestra Misión Y Visión</h2>
          <p>
            Ofrecer servicios técnicos especializados en climatización y
            reparación de electrodomésticos con altos estándares de calidad,
            promoviendo el uso eficiente y responsable de los equipos mediante
            la orientación y capacitación de nuestros clientes, y asegurando un
            servicio oportuno, confiable y profesional.
          </p>
        </div>
        <div class="image">
          <TbEyeStar size={200} />
          <GrGrow size={200} />

          {/* <img width="500" src={banner1} /> */}
        </div>
      </Section>
      <Section>
        <div class="image">
          <GrGrow size={200} />

          {/* <img width="500" src={banner1} /> */}
        </div>
        <div class="text">
          <h2>VISIÓN</h2>
          <p>
            Ser una empresa líder a nivel nacional en soluciones de
            climatización y reparación de equipos electrónicos, reconocida por
            la calidad de nuestros servicios, la fidelidad de nuestros clientes
            y nuestro compromiso con el mantenimiento preventivo basado en las
            recomendaciones de las marcas. Aspiramos a crecer sosteniblemente,
            expandiendo nuestra cobertura y fortaleciendo relaciones con los
            mejores proveedores del mercado.
          </p>
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
