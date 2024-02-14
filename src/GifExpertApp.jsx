import React, { useState, useEffect } from 'react';
import { AddCategory, GifGrid, Menu } from './components';
import Loading from './components/Loading';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);

  const thanos = () => {
    setCategories([]);
  };

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoadingInitial(false);
    };

    loadInitialData();
  }, []);

  return (
            <>
              {loadingInitial ? (
                <Loading />
              ) : (
                <>
                  <div className="headerAguilas">
                  <Menu/>
                    <h1>GIF World App</h1>
                  </div>
                  <AddCategory
                    onNewCategory={onAddCategory}
                    currentCategories={categories}
                  />
                  {categories.length > 0 && (
                    <div className="refrescar">
                      <button className="limpiar" onClick={thanos}>
                        🗑️
                      </button>
                    </div>
                  )}
                  {categories.map((category) => (
                    <GifGrid
                      key={category}
                      category={category}
                      setLoadingImages={setLoadingImages}
                    />
                  ))}
                  <div className='pieDePagina'>
                    <p>Version 1.1.0</p>
                  </div>
                  <div className='footerText'>
                    <p>Copyright 2024 GIF World App GM</p>
                    <p>Technologies: React - Vite - Boostrap</p>
                  </div>
                </>
              )}
            </>
  );
};
