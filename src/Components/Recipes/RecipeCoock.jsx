import PropTypes from 'prop-types';

const RecipeCoock = ({ coockeItem, index, removeItem, handelCoockList}) => {
    // console.log(coockInfo);
    // const [recipe_name]= coockInfo;
    // console.log(handleCoockList);
  return (
    <div>
      <table className="table">
        <tr>
          <th>{index + 1}</th>
          <td>{coockeItem.recipe_name}</td>
          <td>{coockeItem.preparation_time_minutes} min</td>
          <td>{coockeItem.calories}</td>
          <td>
            <button 
            onClick={()=> {handelCoockList(coockeItem), removeItem(coockeItem.id) }}
            className="btn btn-sm btn-primary btn-info p-1">
              Preparing
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};


RecipeCoock.porpType = {
  coockeItem:PropTypes.object.isRequired,
  index: PropTypes.value,
  removeItem:PropTypes.array,
  handelCoockList:PropTypes.func
  
}
export default RecipeCoock;
