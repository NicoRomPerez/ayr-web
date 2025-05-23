import lg from "../../assets/LG2.png";
import midea from "../../assets/midea.png";
import samsung2 from "../../assets/samsung2.png";
import mabe from "../../assets/mabe.png";
import whirpool from "../../assets/whirpool.png";
import panasonic from "../../assets/Panasonic1.png";
import haceb from "../../assets/logo-haceb.png";



import "../Tape/Tape.css"
export default function Tape({props,children}) {
  return (
    <div class="tape">
    <img width="150" src={lg} />
    <img width="150" src={samsung2} />
    <img width="150" src={midea} />
    <img width="150" src={mabe} />
    <img width="150" src={whirpool} />
    <img width="150" src={panasonic} />
    <img width="150" src={haceb} />
    <img width="150" src={mabe} />



  </div>
  );
}
