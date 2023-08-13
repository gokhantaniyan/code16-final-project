import React from "react";
import { NavLink } from 'react-router-dom';

function Home(props) {
 return (
  <>
    {/* <h1>Home</h1> */}
    <div className="container" style={{ width: 1200, height: 880, position: 'relative', background: 'white' }}>
      <div className="row">
        <div style={{ width: 592, height: 20, left: 304, top: 35, position: 'absolute' }}>
          <div style={{ 
            left: 0, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
              Painting
          </div>
          <div style={{ 
            left: 75, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
            Photo
          </div>
          <div style={{ 
            left: 137, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
            Drawing
          </div>
          <div style={{ 
            left: 214, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
            Sculpture
          </div>
          <div style={{ 
            left: 296, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
            Digital art
          </div>
          <div style={{ 
            left: 380, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
            Print
          </div>
          <div style={{ 
            left: 436, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', 
            wordWrap: 'break-word' }}
          >
            Inspiration
          </div>
          <div style={{ 
            left: 523, 
            top: 0, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 12, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px',
            wordWrap: 'break-word' }}
          >
            Consultation
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row col-sm-6">
          <div style={{ width: 449, height: 131, left: 67, top: 240, position: 'absolute' }}>
            <div style={{ width: 209, 
              left: 0, 
              top: 15, 
              position: 'absolute', 
              color: 'black', 
              fontSize: 70, 
              fontFamily: 'Nunito Sans', 
              fontWeight: 200, 
              lineHeight: '59.50px', 
              wordWrap: 'break-word' }}
              >
                Online
              </div>
            <div style={{ 
              left: 98, 
              top: 71, 
              position: 'absolute', 
              color: 'black',
              fontSize: 70, 
              fontFamily: 'Nunito Sans', 
              fontWeight: 200, 
              lineHeight: '59.50px', 
              wordWrap: 'break-word' }}
            >
              Gallery
            </div>
            <div style={{ 
              width: 240, 
              left: 209, 
              top: 0, 
              position: 'absolute', 
              color: '#FC8512', 
              fontSize: 110, 
              fontFamily: 'Nunito Sans', 
              fontStyle: 'italic', 
              fontWeight: 300, 
              textTransform: 'uppercase', 
              lineHeight: '64px', 
              wordWrap: 'break-word' }}
            >
              АRт
            </div>
          </div>
          <NavLink to="/catalog">
            <button className="btn" type="button" style={{
              marginTop: 487, 
              width: 168, 
              height: 44, 
              marginLeft: 70, 
              background: '#FC8512', 
              borderRadius: 10, 

              justifyContent: 'center', 
              alignItems: 'center' }}
            >
              Go to catalog
            </button>
          </NavLink>
          <div className="Text" style={{ 
            width: 331, 
            left: 70, 
            top: 397, 
            position: 'absolute', 
            color: '#10101C', 
            fontSize: 16, 
            fontFamily: 'Nunito Sans', 
            fontWeight: 400, 
            lineHeight: '20px', }}
          >
            Works of art for inspiration and earnings around the clock and without borders
          </div>
          <div className="container">
            <div className="row">
              <img style={{
                marginTop: 130, 
                width: 300, 
                position: 'absolute'}} 
                src="assets/Rectangle 60 image.svg" 
                alt="placeholder" 
              />
            </div>
          </div>
        </div>
        <div className="row col-sm-6">
          <img className="BigImage" style={{ 
            width: 600, 
            height: 600, 
            left: 530, 
            top: 190, 
            position: 'absolute' }} 
            src= "assets/Big-image.svg" 
            alt="placeholder" 
          />
          <img className="Rectangle13Image" style={{ 
            width: 104, 
            height: 305, 
            left: 478, 
            top: 532, 
            position: 'absolute' }} 
            src="assets/Rectangle 13 image.svg" 
            alt="placeholder" 
          />
        </div>
      </div>
    </div>
  </>
 )
}

export default Home;