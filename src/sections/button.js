import "./button.css"
function Button(props) {
    return (
        <button className="mainButton" onClick={props.click} style={{borderRadius: 50 ,background: props.backColor, color: props.textColor, width: props.width, height: props.height, boxShadow: props.shadow, fontSize: props.fSize}}>{props.text}</button>
    )
}
export default Button