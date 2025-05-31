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
  return (
    <>
      <div class="container" id="section1">
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
      </div>
    </>
  );
}
