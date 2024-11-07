const unitConversionMap = {
    "gram": "gm",
    "deciliter": "dl",
    "teskedar": "tsk",
    "tesked": "tsk",
    "matsked": "msk",
    "matskedar": "msk",
    "stycken": "st"
};

export const getShortUnit = (unit) => {
    return unitConversionMap[unit] || unit;             // Default to original unit if not in map
};

export const fetchRecipeById = async (recipeId) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching recipe with id: ${recipeId}`, error);
        return null;
    }
}

export const fetchCommentsByRecipeId = async (recipeId) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}/comments`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching comments for recipe with id: ${recipeId}`, error);
        return [];
    }
}

// Här ska en fetch-request göra till en API som sparar ratingen
export const saveRecipeRating = async (recipeId, recipeRating) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}/ratings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: recipeRating }),
        });

        if (response.status === 200) {
            return true;
        } else {
            console.error('Error saving rating:', error);
            return false;
        }

    } catch (error) {
        console.error('Error saving rating:', error);
        return false;
    }
}