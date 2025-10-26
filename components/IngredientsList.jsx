import React from "react"

export default function IngredientsList(props) {
  const { ingredients, getRecipe } = props

  const ingredientsListItems = ingredients.map((data, index) => (
    <li key={index}>{data}</li>
  ))

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>

      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  )
}
