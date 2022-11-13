import * as React from "react";
import "../scss/individualRecipePage.scss"

export default function IndividualRecipePage() {
return (
    <>
    <section className="recipePage-title-section">
    <h1 id="recipe-page-title">Strawberry Cream Cheesecake</h1>
    <div className="recipe-page-title-subsection">
        <div className="recipe-page-title-subsection-container">
         <img
            src="/images/test-user.jpg"
            className="profile-image"
            alt="User Profile"
          />
          <p className="recipe-page-title-subsection-text">Tricia Albert</p>
          </div>
          <div className="recipe-page-title-subsection-container">
            <img src="/images/calendar-icon.svg" alt="Calendar" />
            <p className="recipe-page-title-subsection-text">Yesterday</p>

          </div>
          <div className="recipe-page-title-subsection-container">
            <img src="/images/chat-icon.svg" alt="Chat" />
            <p className="recipe-page-title-subsection-text">24</p>
          </div>
    </div>
    </section>

    <hr />

    <div className="recipe-page-description-container">
        <p className="recipe-page-description">One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!</p>
    </div>
    </>
)
}