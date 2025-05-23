import "../Footer/Footer.css";
import banner from "../../assets/logotipo.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer class="footer">
      <figure>
        <img src={banner} width={200}></img>
      </figure>
      <div>
        <h2>CONTACTOS</h2>
        <ul>
          <li>
            <FaPhoneSquareAlt size={30} />
            <label>+5731041071</label>
          </li>
          <li>
            <FaPhoneSquareAlt size={30} />
            <label>+5731041071</label>
          </li>
          <li>
            <MdMarkEmailUnread size={30} />
            <label>prueba@yopmail.com</label>
          </li>
          <li>
            <MdMarkEmailUnread size={30} />

            <label>prueba@yopmail.com</label>
          </li>
          <li>
            <FaMapLocationDot size={30} />

            <label>Cra 64-09 Ibagué-Colombia</label>
          </li>
          <li>
            <FaMapLocationDot size={30} />

            <label>Otro dato</label>
          </li>
        </ul>
      </div>
      <div>
        <h2>ENLACES</h2>
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
        <ul>
          <li>
            <FaPhoneSquareAlt size={30} />
            <label>prueba@yopmail.com</label>
          </li>
          <li>
            <FaMapLocationDot size={30} />
            <label>prueba@yopmail.com</label>
          </li>
        </ul>
      </div>
    </footer>
  );
}
