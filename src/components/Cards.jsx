import React from "react";
import Card from "./Card";
import data from "../data.js";

export default function Cards() {
  const cardArray = data.map((item) => {
    return (
      <div>
        <Card key={item.id} item={item} />
        <hr />
      </div>
    );
  });

  return <section className="cards--container">{cardArray}</section>;
}
