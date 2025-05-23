import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Tape from "../components/Tape/Tape";
import "../layouts/rootLayout.css";

export default function RootLayout({children}) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
