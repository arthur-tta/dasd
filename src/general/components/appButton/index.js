import { Button } from "react-bootstrap";
import './styles.scss'

function AppButton (props) {
    const {text, className, onClick, style} = props;
    return (
        <Button className={`${className}`} onClick={onClick} style={style}>
            {text}
        </Button>
    )
}

export default AppButton;