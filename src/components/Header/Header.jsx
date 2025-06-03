import banner from "../../assets/logotipo.png";
import "../Header/Header.css";
import { HashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Header() {
  const rutas = ["INICIO", "NOSOTROS", "PRODUCTOS", "SERVICIOS", "CONTACTO"];

  const viweMenu = () => {
    const elemento = document.getElementById("miElemento");
    elemento.classList.toggle("activo"); // o toggle() para alternar
  };

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
        <button
          onClick={() => {
            viweMenu();
          }}
        >
          {" "}
          <IoMenu size={30}></IoMenu>{" "}
        </button>
      </div>
      <div class="menu2" id="miElemento">
        <ul class="varela-round-regular">{listItems}</ul>
      </div>
      <div class="socialMediaList">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063633276014"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063633276014"
              target="_blank"
            >
              <FaFacebook size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ibaguesoporte/" target="_blank">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
