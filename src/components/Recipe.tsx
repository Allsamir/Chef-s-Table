import React, { useState } from 'react'
import { TimeIcon } from '../icons/TimeIcon'
import { Flame } from '../icons/Flame'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

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

          handleWantToCook: (recipe: {
                    recipe_id: number,
                    recipe_name: string,
                    recipe_image: string,
                    short_description: string,
                    ingredients: Array<string>,
                    preparing_time: string,
                    calories: string
          }) => void

}

const Recipe: React.FC<ChildProps> = ({recipe, handleWantToCook}) => {
  const [disableButton, setDisableButton] = useState<boolean>(true);

    const showToastMessage = () => {
          toast("Already Exits !", {
                    position: 'top-right'
          })
  }
 
  return (
    <div className="p-6 rounded-2xl border border-solid border-recipe-border">
      <img src={recipe.recipe_image} alt="This is Recipe Image"  className="pb-6 w-full rounded-2xl"/>
        <h2 className="font-semibold text-xl text-black">{recipe.recipe_name}</h2>
        <p className="text-card-p-color text-base font-normal pt-4 pb-10">{recipe.short_description}</p>
        <h3 className="text-lg font-medium text-black">Ingredients: {recipe.ingredients.length}</h3>
          <ul className="py-4">
            {recipe.ingredients.map((ingredient, index) => <li key={index} className="text-lg text-card-p-color font-normal">{ingredient}</li>)}
          </ul>
          <div className="flex items-center gap-4 py-6">
            <span  className="flex items-center gap-x-2"><TimeIcon /> {recipe.preparing_time}</span>
            <span  className="flex items-center gap-x-2"><Flame /> {recipe.calories}</span>
          </div>
          <button onClick={() => {disableButton && handleWantToCook(recipe); setDisableButton(false); disableButton || showToastMessage()}}  className="btn border-none rounded-[3.125rem] btn-lg bg-light-green text-black hover:text-light-green hover:bg-black">
            Want to Cook
          </button>
          <ToastContainer />
    </div>  
  )
}

export default Recipe