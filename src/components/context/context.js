import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHomePageMeals = useCallback(
    (searchTerm) => {
      if (!loading) {
        setLoading(true);
        axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
          )
          .then((res) => {
            // console.log(res.data.meals);
            setLoading(false);
            setMeals(res.data.meals);
          });
      }
    },
    // eslint-disable-next-line
    []
  );

  const fetchCategoriesPage = useCallback(
    () => {
      if (!loading) {
        setLoading(true);
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
          .then((res) => {
            setLoading(false);
            setCategories(res.data.categories);
          });
      }
    },
    // eslint-disable-next-line
    []
  );

  const fetchRandomPage = useCallback(
    () => {
      if (!loading) {
        setLoading(true);
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
          .then((res) => {
            setLoading(false);
            setRandomMeals(res.data.meals);
          });
      }
    },
    // eslint-disable-next-line
    []
  );

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchCategoriesPage,
        categories,
        fetchRandomPage,
        randomMeals,
        loading,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default AppContext;

// export default myContext;
