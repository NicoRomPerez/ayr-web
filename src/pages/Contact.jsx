import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero/Hero";
import Map from "../components/Map/Map";
import Section from "../components/Section/Section";
import RootLayout from "../layouts/rootLayout";
import banner1 from "../assets/banner1.png";

export default function Contact() {
  return (
    <>
      <RootLayout>
        <Hero hero="contacto"></Hero>
        <Section class="opa">
          <div class="text">
            <h1>Coctacta a nuestros accesores</h1>
            <p>
              <b>
                ¿Necesitas diagnóstico, reparación o mantenimiento para tus
                equipos?{" "}
              </b>
              En A&R Multiservicios estamos listos para ayudarte. Nuestro equipo
              técnico especializado está a tu disposición para resolver
              cualquier problema con eficiencia y respaldo garantizado. 📍
              Visítanos, llámanos o escríbenos — ¡tu tranquilidad es nuestra
              prioridad!
            </p>
          </div>
          <div class="text">
            <form class="form">
              <input type="email" placeholder={"Email"}></input>
              <input type="tel" placeholder={"Telefono"}></input>
              <input type="text" placeholder={"Nombre"}></input>
              <textarea placeholder={"Mensaje"}></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </Section>
        <Section>
          <div class="text">
            <h2>NUESTROS SERVICIOS</h2>
            <h1>Servicio Técnico Especializado para Electrodomésticos</h1>
            <p>
              Centro de servicio autorizado Panasonic diagnostico, mantenimiento
              y reparación de Televisores Equipos de Sonido Computadores
              Circuito Cerrado Unidades Odontológicas Lavadoras Nevecones
              Secadoras Calentadores de Agua Instalación de aires acondicionad.
            </p>
          </div>
          <div class="image">
            <img width="500" src={banner1} />
          </div>
        </Section>
      </RootLayout>
    </>
  );
}
