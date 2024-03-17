import { useEffect, useState } from "react";
// imoport toaster file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipe from "./Recipe";
import RecipeCoocks from "./RecipeCoocks";

const Recipes = () => {
  const [recipeItem, setRecipeItem] = useState([]);
  useEffect(() => {
    //load data from json file
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setRecipeItem(data));
  }, []);

  
  //handle want to coock btn
  const [coockes, setCoockes] = useState([]);
  const handleCoock = (recipe) =>{
    // console.log('this is handle cok btn',recipe);
    //coocking list condition
    const isExit = coockes.find(item => item.id == recipe.id);
    // console.log(isExit);
    if(!isExit){
      const newCockes = [...coockes, recipe];
      setCoockes(newCockes);
    }
    else{
      //use toaster
      toast("More than once!")
    }
  }

  //handel coocklist
  const [coockList, setCoockList] = useState([]);
  const handelCoockList = item =>{
    // console.log('this is coocklist',item);
    const newCoockList = [...coockList, item];
    setCoockList(newCoockList);
  }


  //romove item handle
  const removeItem = (id)=>{
    const isExit = coockes.filter(item => item.id !== id);
    setCoockes(isExit);
  }


  return (
    <div className="mb-10">

      <div className="text-center mt-10">
        <h1 className="text-4xl">Our Recipes</h1>
        <p className="px-5 md:px-36 mt-6">
        Enjoy our restaurant-quality chicken Alfredo pasta! If you have any specific requests or dietary restrictions, feel free to let me know for further customization.
        </p>
      </div>
    
      <div className=" md:flex mt-10 ">
      
            <div className="grid grid-cols-1 md:grid-cols-2 w-2/3">

              {/* Recipe item card */}
            {recipeItem.map((recipeInfo) => (
                <Recipe 
                handleCoock={handleCoock}
                key={recipeInfo.recipe_id} 
                recipe={recipeInfo}></Recipe>
            ))}
            </div>

            <div className="w-full md:w-2/5">
              {/* toaster */}
            <ToastContainer />
            
            <RecipeCoocks 
            coockList={coockList}
            handelCoockList={handelCoockList}
            removeItem={removeItem}
            coockes={coockes}></RecipeCoocks>
            </div>
      </div>
    </div>
  );
};

export default Recipes;
