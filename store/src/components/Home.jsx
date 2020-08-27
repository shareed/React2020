import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import './home.css'
import homeImage from '../images/home.jpg'
import art from '../images/art9.jpg'
import jewelry from '../images/jew.jpg'



function Home(props) {
  console.log(props.text)
  /* 
  useHistory() taps into the history API and provides an object as described here: https://reacttraining.com/react-router/web/api/history
  we will usually use "push" and "goBack" from the history object to navigate when a Link is not available to us. 
  */

  const history = useHistory();
  console.log(history);
  const routeToShop = event => {
    history.push("/item-list");
  };

  return (
    <div className="home-wrapper">
      <div className = 'home-img-container'>
      <img
        className="home-image"
        src= {homeImage}
        alt=""
      />
      </div>






      {/* 
      <p className = "home-text1">COLLECTION OF UNIQUE PIECES</p>
      <h2 className = "home-text">Designs By Keya</h2>
          
          <ul className = "home-text2">
            <li className = 'list1'>Paintings</li>
            <li className = 'list2'>Jewelry</li>
            <li className = 'list3'>Logos</li>
            <li className = 'list4'>Art</li>
          </ul>
         
          
          
          <p className = "home-text3">Every piece is unique in detail, design and creativity, using high quality materials</p>
          <div class="buttons">
          <button className="btn" onClick={routeToShop}>
            <p>Store</p>
          </button>
          <button className="btn" onClick={routeToShop}>
            <p>Blog</p>
          </button>
          <button className="btn" onClick={routeToShop}>
            <p>Contact</p>
          </button>
          <br/>
      </div> */}



<div className = 'home-info'>
      <p className = "home-text1">COLLECTION OF UNIQUE PIECES</p>
      <h2 className = "home-text">Designs By Keya</h2>
  
  <div className="list-container">
    <div className="row">
      <div className="article-wrapper">
        <article>
          <a href="#" className="more">Go to Paintings.....</a>
          <div className="img-wrapper"><img className = 'image' src="http://lorempixel.com/150/150/fashion" alt="" /></div>
          <h1>Paintings</h1>
          <p>A variety of  piece is unique in detail, design and creativity, using high quality materials</p>
        </article>
      </div>
      <div className="col-xs-12 article-wrapper">
        <article>
          <a href="#" className="more">See Jewelry.....</a>
          <div className="img-wrapper"><img className = 'image' src={jewelry} alt="" /></div>
          <h1>Jewelry</h1>
          <p>Unique pieces made using high quality materials</p>
        </article>
      </div>
      <div className="col-xs-12 article-wrapper">
        <article>
          <a href="#" className="more">See Logos......</a>
          <div className="img-wrapper"><img className = 'image' src="http://lorempixel.com/150/150/food" alt="" /></div>
          <h1>Logos</h1>
          <p>Creative, innovative and attractive </p>
        </article>
        </div>
      <div className="col-xs-12 article-wrapper">
        <article>
          <a href="#" className="more">See Art Pieces.....</a>
          <div className="img-wrapper"><img className = 'image' src= {art}  alt="" /></div>
          <h1>Art</h1>
          <p>Detailed and Distinktive piecesHand drawn and digital pieces</p>
        </article>
      </div>
    </div>
  </div>
  </div>








        
      </div>

  );
}

export default Home;
