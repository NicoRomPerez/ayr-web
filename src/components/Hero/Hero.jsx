import React from "react";
import "../../components/Hero/Hero.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Hero(props) {
  const navigate = useNavigate();
  const mostrarMensaje = () => {
    navigate("/SERVICIOS");
  };

  const mostrarMensaje2 = () => {
    navigate("/PRODUCTOS");
  };

  const renderHero = () => {
    switch (props.hero) {
      case "inicio":
        return HeroInicio();
      case "nosotros":
        return HeroNosotros();
      case "contacto":
        return HeroContacto();
      default:
        return <p>Estado desconocido ❓</p>;
    }
  };

  const HeroInicio = () => {
    return (
      <div class="inicio">
        <h1>
          <b>Suministro y mantenimiento especializado</b> de sistemas de
          refrigeración, equipos de cocina y aires acondicionados.
        </h1>
        <p class="varela-round-regular">
          Especialistas en reparación de televisores, sonido, computadoras,
          circuito cerrado, unidades odontológicas, electrodomésticos y aire
          acondicionado. Confía en nuestro centro de servicio autorizado para
          una atención técnica de calidad.
        </p>
        <div class="varela-round-regular">
          <Button
            onClick={mostrarMensaje}
            style={"buttonPrimary"}
            texto={"ver servicios"}
          ></Button>
          <Button
            onClick={mostrarMensaje2}
            style={"buttonSecondary"}
            texto={"ver productos"}
          ></Button>
        </div>
      </div>
    );
  };

  const HeroNosotros = () => {
    return (
      <div class="nosotros">
        <h1>Sobre Nosotros</h1>
        <p class="varela-round-regular">
          Confía en nuestro centro de servicio autorizado para una atención
          técnica de calidad. Por más de 5 años, A y R ha colaborado para
          mejorar la calidad de vida de las personas, mediante la experiencia,
          nuevas tecnologías, y la innovación continua.
        </p>
        <div class="varela-round-regular">
          <Button
            onClick={mostrarMensaje}
            style={"buttonPrimary"}
            texto={"ver servicios"}
          ></Button>
        </div>
      </div>
    );
  };

  const HeroContacto = () => {
    return (
      <div class="contacto">
        <h1>
          <b>Contactanos</b>
        </h1>
        <p class="varela-round-regular">
          Estamos disponibles para brindarte atención personalizada, resolver
          tus inquietudes y ayudarte con soluciones rápidas, confiables y
          profesionales.
        </p>
      </div>
    );
  };

  return (
    <>
      {/* <div class="" id="">
        <div class="heronico">
          <h1>
            <b>Suministro y mantenimiento especializado</b> de sistemas de
            refrigeración, equipos de cocina y aires acondicionados.
          </h1>
          <p class="varela-round-regular">
            Especialistas en reparación de televisores, sonido, computadoras,
            circuito cerrado, unidades odontológicas, electrodomésticos y aire
            acondicionado. Confía en nuestro centro de servicio autorizado para
            una atención técnica de calidad.
          </p>
          <div class="varela-round-regular">
            <Button
              onClick={mostrarMensaje}
              style={"buttonPrimary"}
              texto={"ver servicios"}
            ></Button>
            <Button
              onClick={mostrarMensaje2}
              style={"buttonSecondary"}
              texto={"ver productos"}
            ></Button>
          </div>
        </div>
      </div> */}
      {renderHero()}
    </>
  );
}
