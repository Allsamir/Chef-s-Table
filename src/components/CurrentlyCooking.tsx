import React from 'react'

interface Recipes {
          recipe_id: number,
          recipe_name: string,
          recipe_image: string,
          short_description: string,
          ingredients: Array<string>,
          preparing_time: string,
          calories: string
}

interface ChildProps {
  preparingCooking: Recipes[]
}

export const CurrentlyCooking:React.FC<ChildProps> = ({preparingCooking}) => {
  return (
    <>
    <div className="p-4">
    <h1 className="font-semibold text-2xl text-black pt-8 pb-4 text-center">Currently cooking: {preparingCooking.length}</h1>
    <hr className="w-96 mx-auto"/>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-card-p-color">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody className="text-sidebar-p-color">
      {/* row 1 */}
      {preparingCooking.map((cooking, index) => (<tr key={index}>
          <th>{index+1}</th>
          <td>{cooking.recipe_name}</td>
          <td>{cooking.preparing_time}</td>
          <td>{cooking.calories}</td>
      </tr>
      )
      )}
      <tr>
        <th></th>
        <td></td>
        <th>Total Time = <br />{preparingCooking.reduce((accumulator, currentElement) => {
            return accumulator + parseInt(currentElement.preparing_time)
        }, 0)}</th>
        <th>Total Calories = <br />{preparingCooking.reduce((accumulator, currentElement) => {
            // Extract numeric part from calories string using slice
            return accumulator + parseInt(currentElement.calories.slice(0, 3));
        }, 0)}</th>
      </tr>
    </tbody>
  </table>
</div>
    </div>
</>
  )
}
