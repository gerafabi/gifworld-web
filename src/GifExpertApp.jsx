
import React, { useState } from 'react'
import { AddCategory, GifGrid, Menu } from './components';

import moment from 'moment';

const now = moment().format("DD/MM/YYYY HH:mm A");

export const GifExpertApp = () => {

const [ categories, setCategories ] = useState([""])
const onAddCategory = (newCategory) => {
  if(categories.includes(newCategory)) return;
  setCategories([newCategory,...categories]);
}
  return (
    <>
      {/* Header */}
      <div className="headerAguilas">
      <p>{now}</p> 
      <Menu/>
      <h1>Gif World</h1>    
      </div> 
        {/* Buscador de gifs */}
        <AddCategory 
        onNewCategory={ onAddCategory }
        currentCategories={ categories }
        />
  
        <div className="refrescar">
        <form>
          <button className="limpiar" onClick={()=>setCategories([ ])}>🗑️</button>
        </form>
      </div>
            {/*Listado de Gif */}   
            {
              categories.map(category => (
                  <GifGrid 
                  key={category} 
                  category={category}
                  />
                ))
            }
          
    {/* pie */}
    <div className='pieDePagina'>
      <p>Creada por Gerardo Marcovics ® 2023 </p>
    </div>
    </>
  )
}





