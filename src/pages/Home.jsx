import { useState, useEffect } from 'react';

import { fetchRecipes, getAllSortedCategories, fetchRecipesByCategory } from '../components/Utils/HomePage';

import HomeHeader from "../components/Header/HomeHeader";
import CategoriesBar from "../components/Categories/CategoriesBar";
import SearchBar from "../components/Search/SearchBar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function HomePage() {

    const [availableRecipes, setAvailableRecipes] = useState([]);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);   // to check state of selected category, when using search bar
   
    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = async () => {
        const recipes = await fetchRecipes();
        setAvailableRecipes(recipes);           // get all available recipes from database
        setAvailableCategories(getAllSortedCategories(recipes));   // get categories from all recipes
    };

    const handleCategoryClick = async (category) => {
        if (category == null) {
            setSelectedCategory(null);
            loadRecipes();
        } else {
            setSelectedCategory(category);
            const recipes = await fetchRecipesByCategory(category);
            setAvailableRecipes(recipes);
        }
    };

    // two possibilities for search term-> empty or not-empty
    // if search term is 'empty' -> check state of selected category, and display recipes accordingly
    // if we 'have' a search term -> display recipes according to searched term
    const handleSearch = async (searchTerm) => {
        if (searchTerm === '') {
            if (selectedCategory === null) {
                loadRecipes();
            } else {
                const recipes = await fetchRecipesByCategory(selectedCategory);
                setAvailableRecipes(recipes);
            }        
        } else {
            const filteredRecipes = availableRecipes.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            setAvailableRecipes(filteredRecipes);
        }
    };

    return (
        <div className='body'>
            <HomeHeader />
            <CategoriesBar categories={availableCategories} onCategorySelection={handleCategoryClick}/>
            <SearchBar onSearch={handleSearch}/>
            <Main recipes={availableRecipes}/>
            <Footer />
        </div>
    );
}