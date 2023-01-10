import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './styles.scss'
import AppButton from "../appButton";
import Logo from "../logo/logo";

function HeaderHomepage() {
    const navigate = useNavigate();
    return (
        
        <div className="header-homepage">

            <div className="header-logo"><Logo></Logo></div>  
                  
            <div className="header-btn">
                <div className="btn btn-test">
                    <AppButton
                        text="Test"
                        className="btn-blue"
                        onClick={() => navigate('/test')}
                    />
                </div>
                <div className="btn btn-vocab">
                    <AppButton
                        text="Vocabulary"
                        className="btn-blue"
                        onClick={() => navigate('/vocab')}
                    /> 
                </div>
                <div className="btn btn-login">
                    <AppButton
                        text="Login"
                        className="btn-blue"
                        onClick={() => navigate('/login')}
                    />
                </div>
            </div>
        </div>
            
        
    )
}

export default HeaderHomepage;