import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.png";

import "./MealPage.css";

const MealPage = () => {
  const { mealId } = useParams();
  const [loading, setLoading] = useState(false);
  const [eachMeal, setEachMeal] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMealInfo = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await res.json();
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strInstructions: instructions,
          } = data.meals[0];
          const meal = {
            image,
            name,
            instructions,
          };
          setEachMeal(meal);
        } else {
          setEachMeal(null);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchMealInfo();
  }, [mealId]);

  if (loading) {
    return (
      <div className="meal-con">
        <Link to="/">
          <div className="arrow-con">
            <img src={arrow} alt="" className="arrow" />
          </div>
        </Link>
        <Spinner />;
      </div>
    );
  }

  if (!eachMeal) {
    return <h2>No Meal To Display</h2>;
  } else {
    const { image, name, instructions } = eachMeal;
    return (
      <div className="meal-con">
        <Link to="/">
          <div className="arrow-con">
            <img src={arrow} alt="" className="arrow" />
          </div>
        </Link>

        <div className="meal-each">
          <div className="img-con">
            <img src={image} alt="#" className="me-img" />
          </div>

          <h2 className="food-name">{name}</h2>
          <h3 className="inst">Instructions</h3>

          <p className="meal-inst">{instructions}</p>
        </div>
      </div>
    );
  }
};

export default MealPage;
