import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="img--container">
        <img src={`../src/images/${props.item.img}`} className="card--img" />
      </div>
      <div>
        <div className="location--container">
          <img src={`../src/images/pin.png`} className="pin" />
          <span className="state">{props.item.state}</span>
          <a href="https://www.google.com/" target="_blank">
            <span className="google">View on Google Maps</span>
          </a>
        </div>
        <h2 className="name">{props.item.name}</h2>
        <p className="visit--date">{props.item.visitDate}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
