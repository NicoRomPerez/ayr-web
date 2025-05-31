import "../Button/Button.css";

export default function Button({ onClick, texto, style }) {
  return (
    <button onClick={onClick} class={style}>
      {texto}
    </button>
  );
}
