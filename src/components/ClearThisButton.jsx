import React, { useState } from 'react'

function ClearThisButton({items, onClear}){
  const [isVisible, setIsVisible] = useState(items.length > 0);

  const handleClearClick = () =>{
    onClear();
    setIsVisible(false);
  };
  return isVisible ? (
    <button className='limpiar' onClick={handleClearClick}>🗑️</button>
  ) : null;

}
export default ClearThisButton;