import logo from "../../assets/logo (2).png"
import "./Footer.css"
const Footer = ()=>{
    return(
        <footer className="bg-light py-5">
            <h2 className="h2 fw-semibold text-dark mt-4 text-center">
                Explore the world with My Dream place
            </h2>

            <div className="container mt-4 d-flex flex-column flex-md-row">
                {/* Left Section */}
                <div className="mb-4 me-md-5">
                    <img src={logo} alt="logo" className="img-fluid" style={{height: "32px", width: "auto"}} />
                    {/* <h1 className="h4 fw-semibold text-dark mt-2"></h1> */}
                    <p className="text-muted mt-2">
                        Your next go-to companion for travel
                    </p>
                </div>

                {/* Links Section */}
                <div className="row g-4 flex-grow-1">
                    {/* Website Links */}
                    <div className="col-6 col-md-3">
                        <h3 className="h6 fw-semibold text-dark mb-3">Company</h3>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-muted text-decoration-none hover-link">About</a> </li>                                        
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Jobs</a> </li>                
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Newsroom</a> </li>                
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Advertising</a> </li>                
                            <li><a href="/contact-us" className="text-muted text-decoration-none hover-link">Contact Us</a> </li>                
                        </ul>
                    </div>

                    {/* Explore Links  */}
                    <div className="col-6 col-md-3">
                        <h3 className="h6 fw-semibold text-dark mb-3">Explore</h3>
                        <ul className="list-unstyled">
                            <li><a href="/category/:india" className="text-muted text-decoration-none hover-link">India</a> </li>
                            <li><a href="/category/new-zealand" className="text-muted text-decoration-none hover-link">New Zealand</a> </li>
                            <li><a href="/category/australia" className="text-muted text-decoration-none hover-link">Australia</a> </li>
                            <li><a href="/category/europe" className="text-muted text-decoration-none hover-link">Europe</a> </li>
                            <li><a href="/category/usa" className="text-muted text-decoration-none hover-link">United State America (USA)</a> </li>
                            <li><a href="/category/france" className="text-muted text-decoration-none hover-link">Italy</a> </li>
                            <li><a href="/" className="text-muted text-decoration-none hover-link">See more</a> </li>
                        </ul>
                    </div>

                    {/* Terms and Policies */}
                    <div className="col-6 col-md-3">
                        <h3 className="h6 fw-semibold text-dark mb-3">Terms and Policies</h3>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Privacy Policy</a></li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Terms of User</a></li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Accessibility</a></li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link"> Reward system policy</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="col6 col-md-3">
                        <h3 className="h6 fw-semibold text-dark mb-3">Help</h3>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-muted text-decoration-none hover-link">Support</a> </li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Cancel your bookings</a> </li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Use Coupon</a> </li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link">Refund Policies</a> </li>
                            <li><a href="#" className="text-muted text-decoration-none hover-link">International Travel Documents</a> </li>

                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer;