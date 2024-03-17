import PropTypes from "prop-types";

const RecipeCoockList = ({currentCoock, index}) => {
  // console.log(currentCoock);
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>{index + 1}</th>
            <td>{currentCoock.recipe_name}</td>
            <td>{currentCoock.preparation_time_minutes} min</td>
            <td>{currentCoock.calories}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

RecipeCoockList.porpType = {
  currentCoock: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default RecipeCoockList;
