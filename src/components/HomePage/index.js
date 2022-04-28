import React, {useState, useCallback, useContext} from 'react'
import "./Home.css"
import { myContext } from '../context/context';
import {Link} from "react-router-dom"
// import MealPage from '../MealPage';
import Spinner from '../Spinner';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  

  const {fetchHomePageMeals, meals, loading} = useContext(myContext);

  const fetchHomePageMealHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  

  return (
    <div className="home">
      <div className="home-search">
        <input type="text" placeholder="Type a meal name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoComplete="on"/>
        <button onClick={fetchHomePageMealHandler} className="btn">Search Meal</button>
      </div>

      <div className="home-meals-grid">
        {loading ? <Spinner /> :  (meals? ( meals.map((meal) => (
          <div className="home-meal" key={meal.idMeal}>
            <Link to={`/${meal.idMeal}`}><img src={meal.strMealThumb} alt="#" className="meal-img"/></Link>
            <h2>{meal.strMeal}</h2>
          </div>
        ))): (<h2>No meals found! Try another meal...</h2>))
         }

{/* {meals, ( meals.map((meal) => (
          <div className="home-meal" key={meal.idMeal}>
            <Link to="/meal"><img src={meal.strMealThumb} alt="#" className="meal-img"/></Link>
            <h2>{meal.strMeal}</h2>
          </div>
        ))): (<h2>No meals found! Try another meal...</h2>)} */}
      </div>
    </div>
  )
}

export default HomePage