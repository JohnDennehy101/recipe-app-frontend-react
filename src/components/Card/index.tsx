import * as React from "react";
import { Link } from "react-router-dom";
import "../../scss/card.scss";

interface Props {
  imagePath: string,
  title: string,
  recipeId: number
}

export default function Card({ imagePath, title, recipeId } : Props) {
  return (
    <Link className="recipe-card-link" to={`/recipe/${recipeId}`}>
    <div className="recipe-card">
      <img className="recipe-card-image" src={imagePath} alt="Shot of recipe" />
      <h2 className="recipe-card-title">{title}</h2>
    </div>
    </Link>
  );
}
