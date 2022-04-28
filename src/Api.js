import axios from 'axios';

const Api = {
    fetchMealInfo: async movieId => {
        return await  axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${movieId}`)
        .then((res) => (res.data.meals)
        )
        // const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${movieId.}`;
        // return await (await fetch(endpoint)).json();
      },
    }

export default Api;