import { submitComment } from "../../src/components/Utils/CommentForm";
import {jest} from '@jest/globals'

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200, 
    json: () => Promise.resolve({}) 
  })
);

describe('submitComment util', () => {

  test('should create a comment and return "Tack för din kommentar!"', async () => {

    const commentData = {
      firstName: "John Doe",
      comment: "This is a great recipe!",
    };
    
    const recipeId = 1;

    const result = await submitComment(recipeId, commentData); // Await the promise becuse method is async

    expect(result).toEqual({
      success: true,
      message: "Tack för din kommentar!", 
    });
  });
});
