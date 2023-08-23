import React from "react";
import { NavLink } from 'react-router-dom';

function Home(props) {
 return (
  <>
    <div className="container" style={{ width: 1200, height: 880, position: 'relative', background: 'white' }}>
      <div className="row">
        <div className="home" style={{ width: 592, height: 20, left: 304, top: 35, position: 'absolute' }}>
          <div className="home-item" style={{left: 0}}>
              Painting
          </div>
          <div className="home-item" style={{left: 75}}>
            Photo
          </div>
          <div className="home-item" style={{left: 137}}>
            Drawing
          </div>
          <div className="home-item" style={{left: 214}}>
            Sculpture
          </div>
          <div className="home-item" style={{left: 296}}>
            Digital art
          </div>
          <div className="home-item" style={{left: 380}}>
            Print
          </div>
          <div className="home-item" style={{left: 436}}>
            Inspiration
          </div>
          <div className="home-item" style={{left: 523}}>
            Consultation
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row col-sm-6">
          <div style={{ width: 449, height: 131, left: 67, top: 240, position: 'absolute' }}>
            <div  className="online" style={{ 
              width: 209, 
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
          <NavLink to="/catalog" className="btn" type="button" style={{
            marginTop: 487, 
            width: 168, 
            height: 44, 
            marginLeft: 70, 
            background: '#FC8512', 
            borderRadius: 10, 
            color: '#FFFFFF',
            justifyContent: 'center', 
            alignItems: 'center' }}
          >
            Go to catalog
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
                marginLeft: 70,
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
          <img  style={{ 
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