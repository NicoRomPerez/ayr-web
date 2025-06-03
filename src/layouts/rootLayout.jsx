import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Tape from "../components/Tape/Tape";
import "../layouts/rootLayout.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <a
        href="https://wa.me/3204606193"
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
