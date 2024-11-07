export const fetchRecipes = async () => {
    try {
        const response = await fetch('https://recept3-bolen.reky.se/recipes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipes: ', error);
        return [];
    }
}

// get all available categories from database
export function getAllSortedCategories(data) {
    const categoriesArray =  data.map(recipe => recipe.categories) ;
    let mergedCategories = [];
    
    categoriesArray.forEach(element => {
        mergedCategories.push(...element);
    });
                   
    let availableCategories = [];

    mergedCategories.forEach(category => {
        if(!availableCategories.includes(category)) {
            availableCategories.push(category);
        }
    });

    return availableCategories.sort();     // returns a sorted list of available categories
}

export const fetchRecipesByCategory = async (selectedCategory) => {
    try {
        const response = await fetch('https://recept3-bolen.reky.se/categories/' + selectedCategory + '/recipes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipes for category: ${selectedCategory}`, error);
        return [];
    }
}
