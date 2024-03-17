import PropTypes from 'prop-types';
import { IoStopwatchOutline  } from "react-icons/io5";
import { FaFire } from "react-icons/fa";



const Recipe = ({ recipe, handleCoock }) => {
    // console.log(recipe);
    const {recipe_name, recipe_img, short_description, ingredients, preparation_time_minutes, calories} = recipe;

  return (
    <div className='space-y-8 mb-5'>
      <div className="card w-80 bg-base-100 border">
            <figure className="px-10 pt-10">
            <img
                src={recipe_img}
                alt="Shoes"
                className="rounded-xl"
            />
            </figure>
            <div className="card-body ">
            <h2 className="card-title">{recipe_name}</h2>
            <p>{short_description}</p>
            <hr />
            <p className='font-bold'>Ingredients: {ingredients.length}</p>
            
            <p>
            {
                ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))
            }
            </p>
            <hr />

            {/* preparation_time */}
            <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <span><IoStopwatchOutline /></span>
                <p>{preparation_time_minutes} min </p>
            </div>
            <div className='flex gap-2 items-center'>
                <span><FaFire /></span>
                <p>{calories} calories</p>
            </div>
            </div>
            <div className="">
                <button onClick={()=> handleCoock(recipe)} className="btn rounded-full bg-cyan-400">Want to Cook</button>
            </div>
            </div>
      </div>
    </div>
  );
};

Recipe.porpType = {
    recipe:PropTypes.object.isRequired,
    handleCoock:PropTypes.array
    
}
export default Recipe;
