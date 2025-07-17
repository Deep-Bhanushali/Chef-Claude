// /* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { getRecipeChefClaude } from "./ai";

const Main = () => {
  const [ingredients, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.curret !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  console.log("Rendered");

  function collectIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    setIngredient((prevIngredient) => [
      ...prevIngredient,
      newIngredient.trim(),
    ]);
  }

  async function getRecipe() {
    const generatedRecipe = await getRecipeChefClaude(ingredients);
    setRecipe(generatedRecipe);
    console.log(generatedRecipe);
  }

  return (
    <main>
      {/* <form onSubmit={handleSubmit} className="add-ingredient-form"> */}
      <form action={collectIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oranges"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      {ingredients.length ? (
        <IngredientList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      ) : null}

      {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
};

export default Main;
