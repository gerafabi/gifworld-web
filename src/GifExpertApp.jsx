import React, { useState } from 'react'
import { AddCategory, GifGrid, Menu } from './components';
import moment from 'moment';


const now = moment().format("HH:mm A");

export const GifExpertApp = () => {
const [ categories, setCategories ] = useState([]);

const thanos = () =>{
  setCategories([]); 
};

const onAddCategory = (newCategory) => {
  if(categories.includes(newCategory)) return;
  setCategories([newCategory,...categories]);
}
  return (
    <>
      <div className="headerAguilas">
      <Menu/>
      <h1>Gif World</h1>  
      </div> 
        <AddCategory 
        onNewCategory={ onAddCategory }
        currentCategories={ categories }
        />
          {
            categories.length > 0 && ( <div className="refrescar">
            <button className="limpiar" 
            onClick={thanos}>🗑️
            </button>
        </div>)
          }
            {
              
              categories.map(category => (
                  <GifGrid 
                  key={category} 
                  category={category}
                  />
                ))
            }
                
          <div className='pieDePagina'>
            <p>Version 1.1.0</p>
          </div>
          <div className='footerText'>
            <p>Created by Gerardo Marcovics</p>
            <p>React - Vite</p>
          </div>
    </>
  )
}





