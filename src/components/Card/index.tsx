import * as React from "react";
import "../../scss/card.scss";

interface Props {
  imagePath: string,
  title: string
}

export default function Card({ imagePath, title } : Props) {
  return (
    <div className="recipe-card">
      <img className="recipe-card-image" src={imagePath} alt="Shot of recipe" />
      <h2 className="recipe-card-title">{title}</h2>
    </div>
  );
}
