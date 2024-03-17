import PropTypes from "prop-types";
import RecipeCoock from "./RecipeCoock";
import RecipeCoockList from "./RecipeCoockList";

const RecipeCoocks = ({ coockes, removeItem, handelCoockList, coockList }) => {
  // console.log(coockList);

  return (
    <div className="border rounded-lg text-center w-full p-1">
      <h1 className="text-2xl font-bold">Want to cook:{coockes.length}</h1>
      <hr />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
        </table>
        {coockes.map((coockInfo, index) => (
          <RecipeCoock
            handelCoockList={handelCoockList}
            removeItem={removeItem}
            index={index}
            coockes={coockes}
            key={coockes.id}
            coockeItem={coockInfo}
          ></RecipeCoock>
        ))}
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">
          Currently cooking:{coockList.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
          </table>
          {/* <RecipeCoockList ></RecipeCoockList> */}

          {coockList.map((currentCoock, index) => (
            <RecipeCoockList
              key={coockList.id}
              index={index}
              currentCoock={currentCoock}
            ></RecipeCoockList>
          ))}
        </div>
      </div>
      {/* calculata coock Item  */}
      <div className="text-left mt-10">
            <h2>Total Time = <span>45</span> minutes</h2>
            <h2>Total Calories = <span>1050</span> calories</h2>
      </div>
    </div>
  );
};

//props type  handle
RecipeCoocks.porpType = {
  coockes: PropTypes.object.isRequired,
  removeItem: PropTypes.array,
};
export default RecipeCoocks;
