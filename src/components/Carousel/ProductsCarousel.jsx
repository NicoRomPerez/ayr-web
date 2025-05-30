// import lg from "../assets/LG2.png";
import { useEffect, useState, useRef, Children } from "react";
import "../Carousel/Carousel.css";
import image1 from "../../assets/bannerMidea.webp";
import image2 from "../../assets/Whirlpool-banner01.jpg";
import image3 from "../../assets/panasonicBanner.jpg";
import Products from "../../utils/Products";
export default function ProductsCarousel({ props, children }) {
  const elementse = useRef([]);

  useEffect(() => {
    elementse.current = [
      document.getElementById("pone"),
      document.getElementById("ptwo"),
    ];
    // const interval = setInterval(() => {
    //   changue();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  //   const products = JSON.stringify(Products);

  setInterval(console.log("1"), 5000);

  const changue = () => {
    let a;
    elementse.current.map((ele, index) => {
      if (ele.classList.contains("principal")) {
        elementse.current[index].classList.remove("principal");
        elementse.current[index].classList.add("secundario");
        a = index + 1;
      }
    });
    if (a < elementse.current.length) {
      elementse.current[a].classList.add("principal");
      elementse.current[a].classList.remove("secundario");
    } else {
      elementse.current[0].classList.add("principal");
      elementse.current[0].classList.remove("secundario");
    }
  };

  //   "nombre": "Minisplit Inverter Samsung 24000BTU WIND FREE",
  //   "precio_oferta": "3.580.000 COP",
  //   "precio_original": null,
  //   "enlace": ""

  return (
    <section>
      <a
        onClick={() => {
          changue();
        }}
      >
        {"<"}
      </a>

      <div class="prueba">
        {Products.map((ele, index) => (
          <h1 class={index == 0 ? "primario" : "secundario"} key={index}>
            {ele.nombre}
          </h1>
        ))}
      </div>

      <a
        onClick={() => {
          changue();
        }}
      >
        {">"}
      </a>
    </section>
  );
}
