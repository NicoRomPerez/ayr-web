import Hero from "../components/Hero/Hero";
import RootLayout from "../layouts/rootLayout";
import heronico from "../assets/logotipo.png";
import banner1 from "../assets/banner1.png";
import nosotros from "../assets/nosotros.jpg";
import dispositivos from "../assets/dispositivos.png";
import servicios1 from "../assets/services/service1.jpg";
import servicios2 from "../assets/services/service2.jpg";
import servicios3 from "../assets/services/service3.jpg";
// import servicios4 from "../assets/services/service1.jpg";
// import servicios5 from "../assets/services/service1.jpg";
// import servicios6 from "../assets/services/service1.jpg";

import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { BsBuildingFillAdd } from "react-icons/bs";
import image1 from "../assets/bannerMidea.webp";
import image2 from "../assets/Whirlpool-banner01.jpg";
import image3 from "../assets/panasonicBanner.jpg";

import Tape from "../components/Tape/Tape";
import Carousel from "../components/Carousel/Carousel";
import Map from "../components/Map/Map";
import ProductsCarousel from "../components/Carousel/ProductsCarousel";
import ProductList from "../components/ProductList/ProductList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navegar = (ruta) => {
    navigate(`/${ruta}`);
  };
  return (
    <>
      <RootLayout>
        {/* hero */}
        <Hero hero={"inicio"}></Hero>
        {/* Marcas */}
        <Section>
          <div>
            <h1>Trabajamos con las mejores marcas</h1>
            <h2>NUESTROS PROVEEDORES</h2>
          </div>
          <Tape />
          <Carousel>
            <div class="prueba">
              <div class="principal ojo" id="one">
                <img src={image1}></img>
              </div>
              <div class="secundario" id="two">
                <img src={image2}></img>
              </div>
              <div class="secundario" id="three">
                <img src={image3}></img>
              </div>
            </div>
          </Carousel>
        </Section>
        {/* nosotros */}
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
            <Button
              onClick={() => {
                navegar("NOSOTROS");
              }}
              style={"buttonPrimary"}
              texto={"CONOCE MAS SOBRE NOSOTROS..."}
            ></Button>
          </div>
          <div class="image">
            <img width="420" src={nosotros} />
          </div>
        </Section>
        {/*detalles */}
        <Section>
          <div class="image">
            <img width="420" src={dispositivos} />
          </div>
          <div class="text">
            <h2>DIAGNOSTICO, MANTENIMIENTO Y REPARECION DE:</h2>
            <ul>
              <li>TELEVISORES PLASMA, LCD, LED Y OLED</li>
              <li>EQUIPOS DE SONIDO</li>
              <li>TEATROS EN CASA</li>
              <li>COMPUTADORES</li>
              <li>CIRCUITO CERRADO</li>
              <li>UNIDADES ODONTOLÓGICAS</li>
              <li>LAVADORAS</li>
              <li>NEVECONES</li>
              <li>SECADORAS</li>
              <li>CALENTADORAS DE AGUA</li>
              <li>AIRES ACONDICIONADOS</li>
              <li>INSTALACIÓN DE SOPORTES DE PARED PARA TELEVISORES</li>
            </ul>
            <Button
              onClick={() => {
                navegar("NOSOTROS");
              }}
              style={"buttonPrimary"}
              texto={"SOLICITO SOPORTE"}
            ></Button>
          </div>
        </Section>
        {/* servicios */}
        <Section>
          <div class="servicesSlider">
            <div class="image">
              <img width="350" src={servicios1} />
            </div>
            <div class="image">
              <img width="350" src={servicios2} />
            </div>
            <div class="image">
              <img width="350" src={servicios3} />
            </div>
            <div class="image">
              <img width="350" src={servicios1} />
            </div>
            <div class="image">
              <img width="350" src={servicios1} />
            </div>
          </div>
        </Section>
        {/* <Section> */}
        <Section>
          <h1>Lo Mejor En Electrodomesticos</h1>
          <ProductList></ProductList>
          <Button
            onClick={() => {
              navegar("NOSOTROS");
            }}
            style={"buttonPrimary"}
            texto={"VER MAS PRODUCTOS"}
          ></Button>
        </Section>
        {/* </Section> */}
        <Section>
          <div class="propaganda">
            <div class="text">
              <h1>Aliados de Confianza de Midea</h1>
              <p>
                En A&R Multiservicios somos aliados autorizados de Midea, lo que
                nos permite ofrecer servicios de diagnóstico, mantenimiento y
                reparación con el respaldo y calidad de una marca líder en
                tecnología y confort.
              </p>
            </div>
          </div>
        </Section>
        {/*Detalles*/}
        <Section>
          <div class="text">
            <h2>NUESTROS SERVICIOS</h2>
            <h1>Tu Servicio Técnico Especializado de Confianza</h1>
            <p>
              Centro de servicio autorizado Panasonic diagnostico, mantenimiento
              y reparación de Televisores Equipos de Sonido Computadores
              Circuito Cerrado Unidades Odontológicas Lavadoras Nevecones
              Secadoras Calentadores de Agua Instalación de aires acondicionad.
            </p>
            <Button
              onClick={() => {
                navegar("SERVICIOS");
              }}
              style={"buttonPrimary"}
              texto={"CONOCE MAS..."}
            ></Button>
          </div>
          <div class="image">
            <img width="500" src={banner1} />
          </div>
        </Section>
        {/*Servicios*/}
        <Section>
          <div class="row">
            <div>
              <h2>SERVICIOS</h2>
              <h1>Cuenta con todos nuetros servicios</h1>
            </div>
            <section>
              <figure>
                <GiAutoRepair size={100} />

                <figcaption>
                  <h3>Asesoria Tecnica</h3>
                  <p>
                    Recibe asesoría técnica profesional para cada uno de tus
                    productos.
                  </p>
                </figcaption>
              </figure>
              <figure>
                <BsBuildingFillAdd size={100} />

                <figcaption>
                  <h3>Instalación</h3>
                  <p>
                    Garantizamos una instalación segura y profesional para todos
                    tus equipos.
                  </p>
                </figcaption>
              </figure>
              <figure>
                <RiMotorbikeFill size={100} />

                <figcaption>
                  <h3>Servicio a domicilo</h3>
                  <p>
                    Llevamos la solución hasta tu puerta. Atención rápida y
                    profesional desde la comodidad de tu hogar.
                  </p>
                </figcaption>
              </figure>
              <figure>
                <MdHomeRepairService size={100} />

                <figcaption>
                  <h3>Repuestos de calidad</h3>
                  <p>
                    Utilizamos repuestos de calidad para un rendimiento
                    duradero.
                  </p>
                </figcaption>
              </figure>
            </section>
            <Button style={"buttonPrimary"} texto={"CONOCE MAS"}></Button>
          </div>
        </Section>
        {/*contacto */}
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
          <div class="image">
            <Map />
          </div>
        </Section>
      </RootLayout>
    </>
  );
}
