import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Tape from "../components/Tape/Tape";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../layouts/rootLayout.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <a
        href="https://api.whatsapp.com/send?phone=3204606193&text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Este"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>

      <Footer />
    </>
  );
}
