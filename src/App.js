import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import RandomMeal from "./components/RandomMeal";
import MealPage from "./components/MealPage";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/categories" element={<Categories/>} />
        <Route exact path="/random" element={<RandomMeal/>} />
        <Route exact path="/:movieId" element={<MealPage/>} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
