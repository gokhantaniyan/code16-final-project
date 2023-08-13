import { useState } from "react";
import { NavLink } from "react-router-dom";


function Content(props) {

 const [isExpanded, setIsExpanded] = useState(false)
 const [selectedCountry, setSelectedCountry] = useState('India');

 const toggleDropdown = () => {
  setIsExpanded(prevExpanded => !prevExpanded);
 };

 const handleCountryChange = (event) => {
  setSelectedCountry(event.target.innerText);
  toggleDropdown(); // Dropdown menüyü kapat
 };
    
 return (
  <>
    <main className="container mt-3">
        <div className="row">
          {/* Aside */}
          <aside className="col-sm-6">
            <img className="d-block w-100" src="/src/Images/Big hero lft 1.svg" alt="" />
          </aside>
          {/* Aside End */}
          {/* Article Start */}
          <article className="col-sm px-5">
            <h1 style={{fontFamily: "Lora, serif", fontSize: "55px"}}>Travel to your dream place</h1>
            <article className="col-sm mt-5 px-5">
              <div className="dropdown">
                <h2 style={{fontSize: "32px", fontFamily: "Lora, serif", fontStyle: "normal", fontWeight: "600px", lineHeight: "normal"}}>
                    Explore Popular Destinations in
                  <div className={`dropdown ${isExpanded ? "show" : ""}`}>
                    <button
                      className="btn dropdown-toggle d-inline-flex justify-content-center align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{border: "1px solid #FFF", borderRadius: "6px" }}
                      onClick={toggleDropdown}
                    >
                      {selectedCountry}
                    </button>
                    <ul className={`dropdown-menu ${isExpanded ? "show" : ""}`}>
                    <li>
                        <a className="dropdown-item" onClick={handleCountryChange}>
                          India
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={handleCountryChange}>
                          China
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={handleCountryChange}>
                          Japan
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={handleCountryChange}>
                          New Zealand
                        </a>
                      </li>
                    </ul>
                  </div>
                </h2>
              </div>
            </article>
            <article className="row px-5">
              <article className="col-sm-4">
                <img src="/src/Images/Rectangle 13.svg" alt="" className="d-block w-100 mb-2" />
                <p style={{fontFamily: "Inter, sans-serif", fontSize: "14px"}}>Varanasi</p>
              </article>
              <article className="col-sm-4">
                <img src="/src/Images/Rectangle 11.svg" alt="" className="d-block w-100 mb-2" />
                <p style={{fontFamily: "Inter, sans-serif", fontSize: "14px"}}>Shillong</p>
              </article>
              <article className="col-sm-4">
                <img src="/src/Images/Rectangle 12.svg" alt="" className="d-block w-100 mb-2" />
                <p style={{fontFamily: "Inter, sans-serif", fontSize: "14px"}}>Ooty</p>
              </article>
            </article>
            <NavLink
              to="/BookNow"
              className=" nav-link d-flex justify-content-end mt-3 pe-5 text-decoration-underline"
              style={{color: '#219EBC', fontFamily: "Inter", fontStyle: "normal", fontSize: '24px', fontWeight: '500', lineHeight: "normal" }}
            >
              Explore More
            </NavLink>
          </article>
          {/* Article End */}
        </div>
    </main>
  </>
 )
}

export default Content;