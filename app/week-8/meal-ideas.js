"use client"

import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data.meals);
        return data.meals;
      } catch (error) {
        console.error("Error:", error);
      }
}



export default function MealIdeas( {ingredient} ) {

    const [meals, setMeals] = useState([]);

    useEffect( () => {loadMealIdeas(ingredient)}, [ingredient])

    async function loadMealIdeas(ingredient) {
        let mealIdea = await fetchMealIdeas(ingredient);
        setMeals(prev => prev = mealIdea)
    }

    return(
        <div className="m-20">
            <header className="text-xl bg-purple-400 w-fit rounded-sm">Meal suggestions</header>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index} className="rounded-lg mb-5 bg-blue-400 w-fit">{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}