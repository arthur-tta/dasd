import { Button, Nav, NavItem, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppButton from "../appButton";
function Header() {
    const navigate = useNavigate()
    return (
        <div className="d-flex border-bottom p-3 text-end bg-light justify-content-end position-fixed w-100 top-0">
            <Navbar>
                <Nav.Link href="/test" className="me-5">TEST</Nav.Link>
                <Nav.Link href="/vocab" className="me-5">VOCABULARY</Nav.Link>
            </Navbar>
            <AppButton 
                text="Logout"
                className="btn-blue"
                onClick={() => navigate('/login')}
            />

            <AppButton 
                text="Cá nhân"
                className="btn-blue"
                onClick={() => navigate('/infor')}
            />
        </div>
    )
}

export default Header;