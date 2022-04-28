import React, { useEffect, useContext }from 'react';
import { myContext } from '../context/context';
import Spinner from '../Spinner';
import "./RandomMeal.css"

const RandomMeal = () => {
  const {fetchRandomPage, randomMeals, loading} = useContext(myContext);

  useEffect(()=> {
    fetchRandomPage();
  }, [fetchRandomPage])

  
  return (
    <div className="random">
      
      {randomMeals.map((meal) => (
        <div key= {meal.idMeal} className="random-grid">
          <div className="random-grid-controls">
          
          {loading ? <Spinner /> :<img src={meal.strMealThumb} alt="#" />}
            <button onClick={fetchRandomPage}>Generate another meal</button>
          </div>
          {loading ? <Spinner /> :(<div className="random-grid-instructions">
          <h2>{meal.strMeal}</h2>
            <h3 className="inst">
              Instructions
            </h3>
            
            <p>
              {meal.strInstructions}
            </p>
          </div>)}
        </div>
      ))}
    </div>
  )
}

export default RandomMeal