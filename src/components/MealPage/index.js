import React from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner'
import {Link} from "react-router-dom"
import arrow from "../../images/arrow.png"

import { useMovieFetch } from '../../hooks/useMovieFetch'

import './MealPage.css'

const MealPage = () => {

  const {movieId} = useParams();
  const {state: movies, loading} = useMovieFetch(movieId);

  return (
    <div className="meal-con">
      <Link to="/">
        <div className="arrow-con"><img src={arrow} alt="" className="arrow" /></div>
      </Link>
      {/* <div className="arrow-con">
        <Link to="/"><img src={arrow} alt="" className="arrow" /></Link>
      </div> */}
      {loading? <Spinner /> : 
      <div key= {movies[0].idMeal} className="meal-each">
        
        <div className="img-con">
        <img src={movies[0].strMealThumb} alt="#" className="me-img"/>
        </div>
      
          <h2 className="food-name">{movies[0].strMeal}</h2>
            <h3 className="inst">
              Instructions
            </h3>
            
            <p className="meal-inst">
              {movies[0].strInstructions}
            </p>
      </div>}
    </div>
  )
}

export default MealPage

