import "../ProductList/ProductList.css";
import Products from "../../utils/Products";
import dispositivos from "../../assets/products/minisplit.webp";
import Button from "../Button/Button";
import midea from "../../assets/midea.png";

export default function ProductList(second) {
  return (
    <div class="productList">
      {Products.map((ele, index) => (
        <div class="productCard" key={index}>
          <div class="imageProduct">
            <img width="100" src={midea} />

            <img src={dispositivos} width={300}></img>
          </div>
          <div class="infoProduct">
            <p>{ele.nombre}</p>
            <p>
              <b>${ele.precio_oferta}</b>
            </p>
            <Button style={"buttonPrimary"} texto={"COTIZAR PRODUCTO"}></Button>
          </div>
        </div>
      ))}
    </div>
  );
}
