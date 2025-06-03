import "../Footer/Footer.css";
import banner from "../../assets/logotipo.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer class="footer">
      <div>
        <h2>ACERCATE A NUESTRAS OFICINAS</h2>

        <p>
          <b>Dirección:</b> Cra 4 estadio # 30 - 44 B/ Claret - Ibagué - Tolima.
          <br />
          <b>Horario: </b> Lunes a Viernes: 8:00 am - 12:00 pm y 2:00 pm - 6:00
          pm.
          <br />
          <b>Sábados:</b> 8:00 am - 1:00pm
          <br />
          <b>Teléfono:</b> +57 (8) 516 2647
          <br />
          <b>Celular:</b> +57 321 5036571 - +57 3212261944
          <br />
          <b>Email:</b> ayrmultiservicios.ibague@gmail.com
          <br />
        </p>
        {/* <Button style={"buttonPrimary"} texto={"NECESITO SOPORTE"}></Button> */}
      </div>
      <div>
        <h2>CONTACTOS</h2>
        <ul>
          <li>
            <FaPhoneSquareAlt size={30} />
            <label>+57 3212261944</label>
          </li>
          <li>
            <RiWhatsappLine size={30} />
            <label>+57 3215036571</label>
          </li>
          <li>
            <MdMarkEmailUnread size={30} />
            <label>ayrmultiservicios.ibague@gmail.com</label>
          </li>
          <li>
            <FaMapLocationDot size={30} />

            <label>Cra # 30 - 44 Claret-Ibagué-Tolima</label>
          </li>
        </ul>
      </div>
      <div>
        <h2>REDES</h2>
        <div class="socialMediaList">
          <ul>
            <li>
              <a
                href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI"
                target="blank"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100063633276014">
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
      </div>
      {/* <div>
        <h2>ENLACES</h2>
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
          <li>
            <a>Nosotro</a>
          </li>
          <li>
            <a>Servicios</a>
          </li>
        </ul>
      </div> */}
      <figure>
        <img src={banner} width={200}></img>
      </figure>
    </footer>
  );
}
