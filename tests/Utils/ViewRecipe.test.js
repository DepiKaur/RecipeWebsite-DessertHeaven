import { getShortUnit, fetchRecipeById, fetchCommentsByRecipeId, saveRecipeRating } from "../../src/components/Utils/ViewRecipe";

// mock the global fetch function before each test
beforeEach(() => {
    global.fetch = jest.fn();
});

// clear the mocks after each test
afterEach(() => {
    jest.clearAllMocks(); 
});

describe('getShortUnit', () => {
    test('should return the short form for a known unit', () => {
        expect(getShortUnit('gram')).toBe('gm');
        expect(getShortUnit('tesked')).toBe('tsk');
        expect(getShortUnit('stycken')).toBe('st');
    });

    test('should return the original unit if not already present in the conversion map', () => {
        expect(getShortUnit('liter')).toBe('liter');
        expect(getShortUnit('cup')).toBe('cup');
    });

    test('should even handle any unexpected inputs', () => {
        expect(getShortUnit('')).toBe('');
        expect(getShortUnit(null)).toBe(null);
    });
});

describe('fetchRecipeById', () => {
    test('should return recipe data when fetch is successful', async () => {
        const mockData = [{ id: 1, title: 'Pasta', category: 'Italian' },
            { id: 2, title: 'Pizza', category: 'Italian' },
            { id: 3, title: 'Tacos', category: 'Mexican' }
        ];
        const recipeId = 2;
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });
        
        const data = await fetchRecipeById(recipeId);
        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}`);
    });

    test('should return NULL when fetch fails', async () => {
        // to mock console.error
        jest.spyOn(console, 'error').mockImplementation(() => {}); 
        const recipeId = 8;
        fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const data = await fetchRecipeById(recipeId);

        expect(data).toEqual(null);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}`);
        expect(console.error).toHaveBeenCalledWith(`Error fetching recipe with id: ${recipeId}`, expect.any(Error));
    });
});

describe('fetchCommentsByRecipeId', () => {
    test('should return an array of comments if fetch is successful', async () => {
        const mockData = [{ id: 1, title: 'Pasta', comments: ['comment1', 'comment2', 'comment3'] },
            { id: 2, title: 'Pizza', comments: ['test-comment', 'test-comment2', 'testComment']  },
            { id: 3, title: 'Tacos', comments: [] }
        ];
        const recipeId = 1;

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const commentsData = await fetchCommentsByRecipeId(recipeId);
        expect(commentsData).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}/comments`);
    });

    test('should return an empty array when fetch fails', async () => {
        // to mock console.error
        jest.spyOn(console, 'error').mockImplementation(() => {}); 
        const recipeId = 8;
        fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const data = await fetchCommentsByRecipeId(recipeId);

        expect(data).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}/comments`);
        expect(console.error).toHaveBeenCalledWith(`Error fetching comments for recipe with id: ${recipeId}`, expect.any(Error));
    });
});

describe('saveRecipeRating', () => {
    test('should return true when the rating is saved successfully (HTTP status 200)', async () => {
        
        // fetch is successful
        fetch.mockResolvedValueOnce({
            status: 200,
        });

        const recipeId = 1;
        const recipeRating = 3;

        const result = await saveRecipeRating(recipeId, recipeRating);

        expect(result).toBe(true);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}/ratings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: recipeRating }),
        });
    });

    test('should return false when the fetch response status is not 200', async () => {

        // fetch failed
        fetch.mockResolvedValueOnce({
            status: 400
        });

        const recipeId = 1;
        const recipeRating = 3;

        const result = await saveRecipeRating(recipeId, recipeRating);

        expect(result).toBe(false);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}/ratings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: recipeRating }),
        });
    });

    test('should return false and log an error when fetch throws an error', async () => {
        // spy on console.error
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
        // mock a rejected fetch request
        fetch.mockRejectedValueOnce(new Error('Some network error'));
    
        const recipeId = 1;
        const recipeRating = 3;
    
        const result = await saveRecipeRating(recipeId, recipeRating);
    
        expect(result).toBe(false);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/recipes/${recipeId}/ratings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rating: recipeRating }),
        });
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error saving rating:', expect.any(Error));
    
        // restore the console.error mock
        consoleErrorSpy.mockRestore();
      });
});