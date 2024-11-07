import { fetchRecipes, getAllCategories, fetchRecipesByCategory } from "../../src/components/Utils/HomePage";

// mock the global fetch function before each test
beforeEach(() => {
    global.fetch = jest.fn();
});

// clear the mocks after each test
afterEach(() => {
    jest.clearAllMocks(); 
});

describe('fetchRecipes', () => {
    test('should return data when fetch is successful', async () => {
        const mockData = [{ id: 1, title: 'Pasta' }, { id: 2, title: 'Pizza' }, { id: 3, title: 'Mac n Cheese'}];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const data = await fetchRecipes();

        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith('https://recept3-bolen.reky.se/recipes');
    });

    test('should return an empty array when fetch fails', async () => {
        // to mock console.error
        jest.spyOn(console, 'error').mockImplementation(() => {});
        fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const data = await fetchRecipes();
    
        expect(data).toEqual([]);
        expect(fetch).toHaveBeenCalledWith('https://recept3-bolen.reky.se/recipes');
        expect(console.error).toHaveBeenCalledWith('Error fetching recipes: ', expect.any(Error));    
    });
});

describe('getAllCategories', () => {
    test('should return all unique categories', () => {
        const mockData = [
            { id: 1, categories: ['Italian', 'Pasta'] },
            { id: 2, categories: ['Italian', 'Pizza'] },
            { id: 3, categories: ['Mexican'] },
        ];

        const result = getAllCategories(mockData);

        expect(result).toEqual(['Italian', 'Pasta', 'Pizza', 'Mexican']);
    });

    it('should return an empty array if no categories are present', () => {
        const mockData = [{ id: 1, categories: [] }, { id: 2, categories: [] }];
        
        const result = getAllCategories(mockData);

        expect(result).toEqual([]);
    });
});

describe('fetchRecipesByCategory', () => {
    test('should return data when fetch is successful', async () => {
        const mockData = [{ id: 1, title: 'Pasta', category: 'Italian' },
            { id: 2, title: 'Pizza', category: 'Italian' },
            { id: 3, title: 'Tacos', category: 'Mexican' }
        ];
        const category = 'Italian';
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });
        
        const data = await fetchRecipesByCategory(category);
        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/categories/${category}/recipes`);
    });

    test('should return an empty array when fetch fails', async () => {
        // to mock console.error
        jest.spyOn(console, 'error').mockImplementation(() => {}); 
        const category = 'UnknownCategory';
        fetch.mockRejectedValueOnce(new Error('Fetch failed'));

        const data = await fetchRecipesByCategory(category);

        expect(data).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(`https://recept3-bolen.reky.se/categories/${category}/recipes`);
        expect(console.error).toHaveBeenCalledWith(`Error fetching recipes for category: ${category}`, expect.any(Error));
    });
});