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
          wantToCookContainer: Recipes[]
}

export const WantToCook: React.FC<ChildProps> = ({wantToCookContainer}) => {
 
return (
<div className="p-4">
<h1 className="font-semibold text-2xl text-black pt-8 pb-4 text-center">Want to Cook: {wantToCookContainer.length}</h1>
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
      {wantToCookContainer.map((wantToCook, index) => (<tr key={index}>
          <th>{index+1}</th>
          <td>{wantToCook.recipe_name}</td>
          <td>{wantToCook.preparing_time}</td>
          <td>{wantToCook.calories}</td>
          <td><button className="btn border-none rounded-[3.125rem] bg-light-green text-black hover:text-light-green hover:bg-black">Preparing</button></td>
      </tr>))}
    </tbody>
  </table>
</div>
</div>
  )
}
