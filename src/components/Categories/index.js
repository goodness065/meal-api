import React, { useEffect, useContext } from 'react';
import {myContext} from '../context/context';
import Spinner from '../Spinner';
import "./Categories.css"

const Categories = () => {
  const { fetchCategoriesPage, categories, loading } = useContext(myContext);

  useEffect(() => {
    fetchCategoriesPage();
  }, [fetchCategoriesPage]);

  var dBlogs = categories.map((category) =>(
    <div key= {category.idCategory} className="category-each">
      <img src={category.strCategoryThumb} alt="#" />
      <h4>{category.strCategory}</h4>
    </div>
  ));

  return (
    <div className="categories">
      {loading ? <Spinner /> :  dBlogs}
      
       
    </div>
  )
}

export default Categories