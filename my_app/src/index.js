import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {Admin} from './Admin';
import img from './images/63.webp';
import sams from"./images/samsung_galaxy.jpg"
import Xiaomi from './images/Xiaomi.png';
import OnePlus from './images/one plus.jpg';
import realme from './images/realme.jpg';
import reportWebVitals from './reportWebVitals';

const mobilePhones = [
  {
    image:img,
    brand: "Apple",
    model: "iPhone 14 Pro",
    price: 1199,
    color: "Space Black",
    storage: "256GB",
    is5G: true,
    rating: 4.8
  },
  {
    image:sams,
    brand: "Samsung",
    model: "Galaxy S23 Ultra",
    price: 1099,
    color: "Phantom Black",
    storage: "256GB",
    is5G: true,
    rating: 4.7
  },
  {
    image:OnePlus,
    brand: "OnePlus",
    model: "11R",
    price: 449,
    color: "Galactic Silver",
    storage: "128GB",
    is5G: true,
    rating: 4.5
  },
  {
    image:Xiaomi,
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    price: 249,
    color: "Midnight Black",
    storage: "128GB",
    is5G: true,
    rating: 4.2
  },
  {
    image:realme,
    brand: "Realme",
    model: "Narzo 60 5G",
    price: 199,
    color: "Mars Orange",
    storage: "128GB",
    is5G: true,
    rating: 4.3
  }
];




const root = ReactDOM.createRoot(document.getElementById('root'));

 
root.render(
  <React.StrictMode>
    {/* <App /> */}
   
   { 
   
   mobilePhones.map((e,index)=>(
   <Admin list={e} />
   )) 
   
   }

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
