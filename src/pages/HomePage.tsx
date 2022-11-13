import * as React from "react";
import Card from "../components/Card";
import "../scss/homepage.scss";

export default function HomePage() {
  return (
    <>
      <h1 className="section-title">Recipe List</h1>
      <div className="recipe-list-grid">
        <Card
          imagePath={"/images/recipe_placeholder.jpg"}
          title={"Placeholder Recipe Title"}
          recipeId={1}
        />
        <Card
          imagePath={"/images/recipe_placeholder.jpg"}
          title={"Placeholder Recipe Title"}
          recipeId={2}
        />
        <Card
          imagePath={"/images/recipe_placeholder.jpg"}
          title={"Placeholder Recipe Title"}
          recipeId={3}
        />
      </div>
    </>
  );
}
