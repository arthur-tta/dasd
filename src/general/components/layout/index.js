import Footer from "../footer";
import Header from "../header";

function BaseLayout(props) {
    return (
        <div>
            <Header />

            <div style={{marginTop: '80px', minHeight: '80vh'}}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default BaseLayout;