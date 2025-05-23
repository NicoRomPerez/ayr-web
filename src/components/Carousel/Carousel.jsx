// import lg from "../assets/LG2.png";
import { useEffect, useState, useRef } from "react";
import "../Carousel/Carousel.css";
import image1 from "../../assets/bannerMidea.webp";
import image2 from "../../assets/Whirlpool-banner01.jpg";
import image3 from "../../assets/panasonicBanner.jpg";

export default function Carousel(second) {
  const elementsw = useRef([]);

  useEffect(() => {
    elementsw.current = [
      document.getElementById("one"),
      document.getElementById("two"),
      document.getElementById("three"),
    ];

    // const interval = setInterval(() => {
    //   changue();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  setInterval(console.log("1"), 5000);

  const changue = () => {
    let a;
    elementsw.current.map((ele, index) => {
      if (ele.classList.contains("principal")) {
        elementsw.current[index].classList.remove("principal");
        elementsw.current[index].classList.add("secundario");
        a = index + 1;
      }
    });
    if (a < elementsw.current.length) {
      elementsw.current[a].classList.add("principal");
      elementsw.current[a].classList.remove("secundario");
    } else {
      elementsw.current[0].classList.add("principal");
      elementsw.current[0].classList.remove("secundario");
    }
  };

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
        <div class="principal ojo" id="one">
          <img src={image1}></img>
        </div>
        <div class="secundario" id="two">
          <img src={image2}></img>
        </div>
        <div class="secundario" id="three">
          <img src={image3}></img>
        </div>
      </div>

      <a
        onClick={() => {
          alert("hola");
        }}
      >
        {">"}
      </a>
    </section>
  );
}
