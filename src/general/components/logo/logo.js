import { useNavigate } from "react-router-dom";
import LogoImg from "../../../assets/images/logo.png"
import './styles.scss'


function Logo(){
    const navigate = useNavigate()
    return(
        <a href="/"><img src={LogoImg} alt="Logo Page"></img></a>
        
    )
}



export default Logo;
