
import React, { useState } from 'react'
import { AddCategory, GifGrid, Menu } from './components';

import moment from 'moment';
import { useFetchGifs } from './hooks/useFetchGifs';

{/* Hora */}
const now = moment().format("HH:mm A");
{/*---------------*/}

export const GifExpertApp = () => {
const {isFull} = useFetchGifs();
const [ categories, setCategories ] = useState([""])

const thanos = () =>{
  setCategories([]); 
};

const onAddCategory = (newCategory) => {
  if(categories.includes(newCategory)) return;
  setCategories([newCategory,...categories]);
}

  return (
    <>
      {/* Header */}
      <div className="headerAguilas">
      <p>Conectad@ desde las {now} </p>
      <Menu/>
      <h1>Gif World</h1>  
      </div> 
        {/* Buscador de gifs */}
        <AddCategory 
        onNewCategory={ onAddCategory }
        currentCategories={ categories }
        />

          <div className="refrescar">
              <button className="limpiar" 
              onClick={thanos}>🗑️
              </button>
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





