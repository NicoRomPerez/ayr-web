import Button from "../Button/Button";
import heronico1 from "../../assets/devices.jpg";
import heronico2 from "../../assets/logo.jpg";


import "../Section/Section.css";

export default function Section({children,props}) {
  return (
    <section class="section">
      {children}
    </section>
  );
}
