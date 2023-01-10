import { Button } from "react-bootstrap";
import HomepageLayout from "../../general/components/layoutHomepage";
import { useNavigate } from "react-router-dom";
import AppButton from "../../general/components/appButton";

function Homepage() {
    const navigate = useNavigate()
    return (
        <HomepageLayout>
            homepage
            <AppButton 
                text="Create Account"
                className="btn-blue"
                onClick={() => navigate('/signup')}
            />
        </HomepageLayout>
    )
}

export default Homepage;