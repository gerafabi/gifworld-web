import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddCategory, GifGrid, Menu } from './components';
import Loading from './components/Loading';
import { AboutMe } from './components/AboutMe';

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
    <Router>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route
          path="/"
          element={
            <>
              {loadingInitial ? (
                <Loading />
              ) : (
                <>
                  <div className="headerAguilas">
                  <Menu/>
                    <h1>GIF World</h1>
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
                    <p>Created by Gerardo Marcovics</p>
                    <p>React - Vite</p>
                  </div>
                </>
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
};
