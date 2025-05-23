import "../Button/Button.css"

export default function Button(props) {
    return(
        <button class={props.style}>
            {props.texto}
        </button>
    )
}