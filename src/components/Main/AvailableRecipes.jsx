import RecipeCard from './RecipeCard';

function createRecipeCard(recipe) {
    return(
      <RecipeCard
        key={recipe._id}
        id={recipe._id}
        rating={recipe.avgRating}
        imageUrl={recipe.imageUrl}
        title={recipe.title}
        description={recipe.description}
        time={recipe.timeInMins}
      />
    );
}  

export default function AvailableRecipes(props) {
    let content = <p>Loading recipes...</p>;
    
    if(props.availableRecipes.length === 0) {
        content = <p>No recipes available</p>;
    }

    return (
        <>
            {props.availableRecipes.length > 0 ? (
                props.availableRecipes.map(createRecipeCard)
            ) : (
                content
            )}
        </>
    );
}