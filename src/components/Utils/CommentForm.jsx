// to submit a comment to the database
export const submitComment = async (recipeId, commentData) => {
    try {
        const response = await fetch(`https://recept3-bolen.reky.se/recipes/${recipeId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });

        if (response.status === 200) {
            return { success: true, message: 'Tack för din kommentar!' };
        } else {
            return { success: false, message: 'Något gick fel. Försök igen.' };
        }
    } catch (error) {
        console.error('Error saving comment:', error);
        return { success: false, message: 'Ett fel uppstod vid sparning av kommentaren.' };
    }
} 

// to reset form fields
export function resetFormFields(setFirstName, setComment, setAnonymous) {
    setFirstName('');
    setComment('');
    setAnonymous(false);
}