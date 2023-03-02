//rafc shotcut componente funcional
import { useState } from "react";



export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  }
  const onSubmit = (Event) => {
    Event.preventDefault();
    if (inputValue.trim().length <= 3) return;
    onNewCategory(inputValue.trim())
    setinputValue("");
  }
  return (
    <>
      <div className="buscador">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Buscar un GIF"
            value={inputValue}
            onChange={onInputChange}
          />
        </form>
      </div>
      
    </>
  )

}
