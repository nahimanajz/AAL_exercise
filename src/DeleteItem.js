import React from 'react';
import PropTypes from 'prop-types';

function RemoveLastItem({LastItemToDelete, isTheListEmpty}){
  const deleteLastItem = event => {
  LastItemToDelete();
  };

  return (
       <button onClick={deleteLastItem} disabled={isTheListEmpty()}>
            Delete Last Item
     </button>
  )
}

RemoveLastItem.propTypes = {
 LastItemToDelete: PropTypes.func.isRequired,
 isTheListEmpty: PropTypes.func.isRequired,
}
export default RemoveLastItem;