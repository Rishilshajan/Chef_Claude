import React from "react"
import IngredientsList from "../components/IngredientsList.jsx"
import ClaudRecipe from "../components/ClaudRecipe.jsx"
import { getRecipeFromGemini } from "../Ai.js"

export default function MainContent() {
  const [items, setItems] = React.useState([])
  const [recipe, setRecipe] = React.useState("")

  function HandleSubmit(formData) {
    const newIngredient = formData.get("ingredients")
    setItems(prevItems => [...prevItems, newIngredient])
  }

  async function getRecipe() {
     const getRecipe = await getRecipeFromGemini(items)
     setRecipe(getRecipe)
  }

  return (
    <main>

      <form className="add-ingredient-form" action={HandleSubmit}>
        <input
          type="text"
          name="ingredients"
          placeholder="e.g. Oregano"
          aria-label="Add Ingredients"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {items.length > 0 && (
        <IngredientsList
          getRecipe={getRecipe}
          ingredients={items}
        />
      )}

      {recipe && <ClaudRecipe recipe={recipe} />}
    </main>
  )
}
