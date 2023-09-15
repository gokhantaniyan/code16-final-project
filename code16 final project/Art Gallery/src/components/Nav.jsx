import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import Login from '../pages/Login';

function Nav(props) {
 return (
  <>
    <nav className="navbar navbar-expand-lg" style={{background: '#F8F4ED'}}>
      <div className="container-fluid">
       <div className="Rectangle2 d-flex justify-content-center align-items-center" style={{ width: '1200px', height: '100px', background: '#F8F4ED' }}>
          <div className="Group5 d-flex justify-content-center align-items-center" style={{ width: '1060px', height: '31px', position: 'relative', background: '#F8F4ED' }}>
            <div className="text-center text-md-start">
              <NavLink to="/" className="Fics text-dark" style={{ 
                left: '0', top: '2px', position: 'absolute', 
                fontSize: '30px', 
                fontFamily: 'Sofia', 
                fontWeight: '400', 
                lineHeight: '20px',
                textDecoration: 'none' }}>
                  Fics
              </NavLink>
              <div className="search-bar">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '265px', 
                    height: '0', 
                    left: '89px', 
                    top: '0px', 
                    position: 'absolute',
                    borderBottom: '1px solid #ccc', // Tek bir alt çizgi
                    padding: '20px',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      padding: '5px',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '5px',
                    }}
                  >
                    <FaSearch />
                  </div>
                </div>
              </div>
              <a className="nav-item text-dark text-uppercase" href="#" style={{ 
                left: '433px', 
                top: '12px', 
                position: 'absolute', 
                fontSize: '14px', 
                fontFamily: 'Nunito Sans', 
                fontWeight: '400', 
                lineHeight: '20px', 
                textDecoration: 'None'}}>
                  En
              </a>
              <div className="navbar-nav">
                <NavLink className="nav-link text-dark" to="/catalog" style={{ 
                  left: '544px', 
                  top: '2px', 
                  position: 'absolute', 
                  fontSize: '14px', 
                  fontFamily: 'Nunito Sans', 
                  fontWeight: '400', 
                  lineHeight: '20px', 
                  textDecoration: 'None'}}>
                    Catalog
                </NavLink>
                <NavLink className="nav-link text-dark" to="/about" style={{ 
                  left: '655px', 
                  top: '2px', 
                  position: 'absolute', 
                  fontSize: '14px', 
                  fontFamily: 'Nunito Sans', 
                  fontWeight: '400', 
                  lineHeight: '20px', 
                  textDecoration: 'None'}}>
                    About
                </NavLink>
                <NavLink className="nav-link text-dark" to="/news" style={{ 
                  left: '756px', 
                  top: '2px', 
                  position: 'absolute', 
                  fontSize: '14px', 
                  fontFamily: 'Nunito Sans', 
                  fontWeight: '400', 
                  lineHeight: '20px', 
                  textDecoration: 'None'}}>
                    News
                </NavLink>
                <NavLink className="nav-link text-dark" to="/contact" style={{ 
                  left: '855px', 
                  top: '2px', 
                  position: 'absolute', 
                  fontSize: '14px', 
                  fontFamily: 'Nunito Sans', 
                  fontWeight: '400', 
                  lineHeight: '20px', 
                  textDecoration: 'None'}}>
                    Contacts
                </NavLink>
              </div>
              
              <div className="basket">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23.8641 6.48525C23.795 6.38442 23.7033 6.30212 23.5967 6.24529C23.4902 6.18846 23.3718 
                  6.15875 23.2518 6.15867H7.25438L6.04344 1.87074C5.56856 0.182276 4.44014 0 3.97732 
                  0H0.748522C0.334676 0 0 0.34404 0 0.768576C0 1.19311 0.335053 1.53713 0.748499 1.53713H3.97692C4.07905 
                  1.53713 4.39074 1.53713 4.60333 2.29138L8.76907 18.0116C8.85952 18.3432 9.15387 18.5723 9.48965 
                  18.5723H19.6649C19.9807 18.5723 20.2626 18.3691 20.3693 18.0638L23.9558 7.18726C24.0383 6.95158 
                  24.004 6.68919 23.8642 6.48525H23.8641ZM19.1381 17.0356H10.0578L7.6751 7.69621H22.1875L19.1381 
                  17.0356ZM17.6536 20.13C16.6126 20.13 15.7691 20.9961 15.7691 22.065C15.7691 23.1339 16.6126 24 17.6536 
                  24C18.6945 24 19.538 23.1339 19.538 22.065C19.538 20.9961 18.6945 20.13 17.6536 20.13ZM10.8696 20.13C9.82864 
                  20.13 8.98517 20.9961 8.98517 22.065C8.98517 23.1339 9.82864 24 10.8696 24C11.9106 24 12.754 23.1339 12.754 
                  22.065C12.754 20.9961 11.9106 20.13 10.8696 20.13Z" fill="#5A5A5F"
                />
                </svg>
              </div>
              <NavLink className="account" to="/login" element={<Login />} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5 6C15.5 7.933 13.933 9.5 12 9.5C10.067 
                  9.5 8.49998 7.933 8.49998 6C8.49998 4.067 10.067 2.5 12 2.5C13.933 2.5 15.5 4.067 15.5 6ZM17 6C17 
                  8.76142 14.7614 11 12 11C9.23856 11 6.99998 8.76142 6.99998 6C6.99998 3.23858 9.23856 1 12 
                  1C14.7614 1 17 3.23858 17 6ZM2.02864 21.2431C1.99699 21.6603 2.33917 22 2.75759 22C3.17601 
                  22 3.51169 21.6601 3.54899 21.2433C3.72557 19.2704 4.58847 17.4122 6.00034 16.0004C7.59154 
                  14.4092 9.74968 13.5152 12 13.5152C14.2503 13.5152 16.4084 14.4092 17.9996 16.0004C19.4115 
                  17.4122 20.2744 19.2704 20.451 21.2433C20.4883 21.6601 20.8239 22 21.2424 22C21.6608 22 22.003 
                  21.6603 21.9713 21.2431C21.7911 18.8678 20.7672 16.6251 19.071 14.9289C17.1957 13.0536 14.6521 
                  12 12 12C9.34782 12 6.80428 13.0536 4.92891 14.9289C3.23277 16.6251 2.20886 18.8678 2.02864 21.2431Z" fill="#5A5A5F"
                />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
        <NavItem />
      </div>
    </nav>
  </>
 )
}

export default Nav;