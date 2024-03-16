import React from 'react'

interface ChildProps {
          recipe: {
                    recipe_id: number,
                    recipe_name: string,
                    recipe_image: string,
                    short_description: string,
                    ingredients: Array<string>,
                    preparing_time: string,
                    calories: string
          }
}

const Recipe: React.FC<ChildProps> = ({recipe}) => {
          console.log(recipe)
  return (
    <div>Recipe</div>
  )
}

export default Recipe