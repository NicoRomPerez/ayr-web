import banner from "../../assets/logotipo.png";
import "../Header/Header.css";
import { HashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Header() {
  const rutas = ["INICIO", "NOSOTROS", "PRODUCTOS", "SERVICIOS", "CONTACTO"];

  const listItems = rutas.map((ele) => (
    <li>
      <HashLink activeClass="active" to={`/${ele}`}>
        {ele}
        {ele === "SERVICIOS" ? (
          <ul class="sublist">
            <li>Aires acondicionados</li>
            <li>Cuartos frios</li>
            <li>Televisores</li>
          </ul>
        ) : (
          <></>
        )}
      </HashLink>
    </li>
  ));

  return (
    <header class="header">
      <div class="varela-round-regular logo">
        <img src={banner} width={150}></img>
        <h3>
          Servicio Técnico
          <br /> Especializado
        </h3>
      </div>
      <div class="menu">
        <ul class="varela-round-regular">{listItems}</ul>
        <label>
          {" "}
          <IoMenu size={30}></IoMenu>{" "}
        </label>
      </div>
      <div class="socialMediaList">
        <ul>
          <li>
            <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
              <FaFacebook size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
