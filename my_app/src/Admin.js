import React from 'react'


export const Admin = (props) => {
  return (
    <div className="mobile-container">
      <h2>Mobile Phones</h2>
      <div className="mobile-grid">
       
          <div  className="mobile-card">
            <div className="mob-pic"><img src={props.list.image}/></div>
            <h3>{props.list.brand} </h3>
            <p><strong>Price:</strong></p>
            <p>st</p>
          </div>
        
      </div>
    </div>
  );
};

