import { Link } from "react-router-dom";
import HomepageLayout from "../../../general/components/layoutHomepage";

function Signup() {
    return (
        <HomepageLayout>
            signup
            <p>
                Bạn đã có tài khoản? 
                <Link to='/login'> Login</Link>
            </p>
        </HomepageLayout>
    )
}

export default Signup;