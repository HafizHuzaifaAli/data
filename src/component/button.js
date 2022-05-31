export default function Button(props) {
    return(
        <button type="button" style={{width: `${props.width}`}} onClick={props.onClick}  className={props.class} to={props.destination}>{props.text}</button>
    )
    
}