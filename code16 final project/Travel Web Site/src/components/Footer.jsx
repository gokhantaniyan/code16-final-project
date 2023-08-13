import { NavLink } from "react-router-dom";

function Footer(props) {
 return (
  <>
   <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-light">Section</h5>
          <div>
            <NavLink to="/" className="nav-link mb-2">Home</NavLink>
            <NavLink to="/About" className="nav-link mb-2">About</NavLink>
            <NavLink to="/Contact" className="nav-link mb-2">Contact</NavLink>
            <NavLink to="/BookNow" className="nav-link mb-2">Book Now</NavLink>
          </div>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-light">Section</h5>
        <div>
          <NavLink to="/" className="nav-link mb-2">Home</NavLink>
          <NavLink to="/About" className="nav-link mb-2">About</NavLink>
          <NavLink to="/Contact" className="nav-link mb-2">Contact</NavLink>
          <NavLink to="/BookNow" className="nav-link mb-2">Book Now</NavLink>
        </div>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-light">Section</h5>
        <div>
          <NavLink to="/" className="nav-link mb-2">Home</NavLink>
          <NavLink to="/About" className="nav-link mb-2">About</NavLink>
          <NavLink to="/Contact" className="nav-link mb-2">Contact</NavLink>
          <NavLink to="/BookNow" className="nav-link mb-2">Book Now</NavLink>
         </div>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 className="text-light">Subscribe to our newsletter</h5>
          <p className="text-light">Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className="text-light">© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
  </>
 )
}

export default Footer;