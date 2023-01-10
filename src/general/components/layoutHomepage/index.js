import Footer from "../footer";
import HeaderHomepage from "../headerHomepage";

function HomepageLayout(props) {
    return (
        <div>
            <HeaderHomepage />
            <div style={{marginTop: '80px', minHeight: '80vh'}}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default HomepageLayout;