import { NavLink } from "react-router-dom";

function Footer(props) {
 return (
  <>
    <div className="container-fluid" style={{background: "#F8F4ED"}}>
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-0">
                    <NavLink to="/" className="Fics text-dark" style={{ 
                        fontSize: '30px', 
                        fontStyle : 'normal',
                        fontFamily: 'Sofia', 
                        fontWeight: '400', 
                        lineHeight: '20px',
                        textDecoration: 'none'}}>
                            Fics
                    </NavLink>
                </div>

                <div className="col-sm-3 mb-0">
                <h5>About</h5>
                <NavLink to="/about" className="nav-link mb-2" style={{
                    color: "#10101C", 
                    fontFamily: "Nunito Sans", 
                    fontSize: "14px", 
                    fontStyle: "normal", 
                    fontWeight: "400", 
                    lineHeight: "20px"}}
                >
                    About
                </NavLink>
                <NavLink to="/catalog" className="nav-link mb-2" style={{
                    color: "#10101C", 
                    fontFamily: "Nunito Sans", 
                    fontSize: "14px", 
                    fontStyle: "normal", 
                    fontWeight: "400", 
                    lineHeight: "20px"}}
                >
                    Catalog
                </NavLink>
                <NavLink to="/news" className="nav-link mb-2" style={{
                    color: "#10101C", 
                    fontFamily: "Nunito Sans", 
                    fontSize: "14px", 
                    fontStyle: "normal", 
                    fontWeight: "400", 
                    lineHeight: "20px"}}
                >
                    News
                </NavLink>
                <NavLink to="/delivery" className="nav-link mb-2"style={{
                    color: "#10101C", 
                    fontFamily: "Nunito Sans", 
                    fontSize: "14px", 
                    fontStyle: "normal", 
                    fontWeight: "400", 
                    lineHeight: "20px"}}
                >
                    Delivery
                </NavLink>
                <NavLink to="/contact" className="nav-link mb-2" style={{
                    color: "#10101C", 
                    fontFamily: "Nunito Sans", 
                    fontSize: "14px", 
                    fontStyle: "normal", 
                    fontWeight: "400", 
                    lineHeight: "20px"}}
                >
                    Contacts
                </NavLink>
                </div>

                <div className="col-sm-3 mb-3">
                <h5>Cooperation</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0" style={{
                            color: "#10101C", 
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px", 
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}
                        >
                            <span style={{
                                fontFamily: "Sofia", 
                                fontSize: "18px", 
                                fontWeight: "400", 
                                lineHeight: "20px", 
                                color: "#10101C"}}
                            >
                                Fics</span> & museums
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0" style={{
                            color: "#10101C", 
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px", 
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}
                        >
                            <span style={{
                                fontFamily: "Sofia", 
                                fontSize: "18px", 
                                fontWeight: "400", 
                                lineHeight: "20px", 
                                color: "#10101C"}}
                            >
                                Fics
                            </span> & exhibitions
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0" style={{
                            color: "#10101C", 
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px",
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}
                        >
                            <span style={{
                                fontFamily: "Sofia", 
                                fontSize: "18px", 
                                fontWeight: "400", 
                                lineHeight: "20px", 
                                color: "#10101C"}}
                            >
                                Fics
                            </span> & sponsorship    
                        </a>
                    </li>
                </ul>
                </div>

                <div className="col-sm-3 mb-3">
                <h5>Support</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0" style={{
                            color: "#10101C", 
                            textDecoration: "none", 
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px", 
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}
                        >
                            Consultation
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0" style={{
                            color: "#10101C", 
                            textDecoration: "none", 
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px", 
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}
                        >
                            To buy
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0" style={{
                            color: "#10101C", 
                            textDecoration: "none", 
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px", 
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}
                        >
                            To sell
                        </a></li>
                </ul>
                </div>

                
                <div className="col-sm-3">
                    <h5 className="mb-3" style={{
                        fontFamily: "Nunito Sans",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "20px",
                        textAlign: "center"
                    }}>
                        About new products
                    </h5>
                    <div style={{
                        borderBottom: '1px solid #ccc', // Tek bir alt çizgi
                    }}
                    >
                        <input id="newsletter1" type="text" className="form-control" placeholder="my email" 
                        style={{border: 'none', backgroundColor: 'transparent', padding: '5px'}}/>
                    </div>
                    
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn mt-3" style={{
                            padding: "8px 40px",
                            borderRadius: "8px",
                            border: "1px solid #FC8512",
                            fontFamily: "Nunito Sans", 
                            fontSize: "14px", 
                            fontStyle: "normal", 
                            fontWeight: "400", 
                            lineHeight: "20px"}}>
                            Send
                        </button>
                    </div>
                    <p style={{color: "#10101C", fontFamily: "Nunito Sans", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20px", marginTop: "100px"}}>
                        Facebook Telegram Instagram Twitter
                    </p>
                </div>
                <p className="mt-0" style={{color: "#10101C", fontFamily: "Nunito Sans", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20px"}}>
                    <svg className="me-2 bi bi-c-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
                    </svg>
                    FICS All rights reserved
                </p>
            </footer>
        </div>
    </div>
  </>
 )
}

export default Footer;