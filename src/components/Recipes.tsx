import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'

interface Recipes {
          recipe_id: number,
          recipe_name: string,
          recipe_image: string,
          short_description: string,
          ingredients: Array<string>,
          preparing_time: string,
          calories: string
}

export const Recipes: React.FC = () => {
          const [recipes, setRecipes] = useState<Recipes[]>([])

          useEffect(() => {
                    fetch('./recipes.json')
                    .then(response => response.json())
                    .then(data => setRecipes(data))
          }, [])


  return (
    <>
    <div className="recipes-title text-center">
          <h1 className="text-4xl font-semibold text-black">Our Recipes</h1>
          <p className="text-p-color text-base font-normal pt-6">Our Recipes are the best in the world. You can get all the best Recipes from diffrent nations <br />all around the world. Check down below the Recipes</p>
    </div>
    {/* Recipes section */}
    <div className="flex lg:flex-row flex-col gap-6">
          <div className="lg:w-3/5 w-full grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}/>)}
          </div>
          <div className="lg:flex-1 w-full">

          </div>
    </div>
    </>
  )
}