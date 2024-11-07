import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { displayStarRating, categorizeDifficulty, renderDifficultyBars } from '../../src/components/Utils/RecipeCard';

// Mock the react-icons/fa import
jest.mock('react-icons/fa', () => ({
  FaStar: () => <div data-testid="fa-star" />,
}));

// Test for displayStarRating
describe('displayStarRating', () => {
  it('renders correct number of stars', () => {
    render(displayStarRating(3.5));
    const stars = screen.getAllByTestId('fa-star');
    expect(stars).toHaveLength(10); // 5 grey stars and 5 orange stars
  });
});

// Test for categorizeDifficulty
describe('categorizeDifficulty', () => {
  it('categorizes as Enkel for 30 minutes or less', () => {
    expect(categorizeDifficulty(30)).toBe('Enkel');
    expect(categorizeDifficulty(15)).toBe('Enkel');
  });

  it('categorizes as Medelsvår for 31-60 minutes', () => {
    expect(categorizeDifficulty(45)).toBe('Medelsvår');
    expect(categorizeDifficulty(60)).toBe('Medelsvår');
  });

  it('categorizes as Svår for 61-90 minutes', () => {
    expect(categorizeDifficulty(75)).toBe('Svår');
    expect(categorizeDifficulty(90)).toBe('Svår');
  });

  it('categorizes as Komplicerad for more than 90 minutes', () => {
    expect(categorizeDifficulty(91)).toBe('Komplicerad');
    expect(categorizeDifficulty(120)).toBe('Komplicerad');
  });
});

// Test for renderDifficultyBars
describe('renderDifficultyBars', () => {
  const mockStyle = {
    'difficulty-level': 'difficulty-level-class',
    'difficulty-text': 'difficulty-text-class',
    'difficulty-bars': 'difficulty-bars-class',
    'bar': 'bar-class',
    'filled': 'filled-class'
  };

  it('renders correct number of filled bars for Enkel', () => {
    const { container } = render(renderDifficultyBars(30, mockStyle));
    expect(screen.getByText('Enkel')).toBeInTheDocument();
    const bars = container.querySelectorAll(`.${mockStyle.bar}`);
    expect(bars).toHaveLength(4);
    expect(bars[0]).toHaveClass('filled-class');
    expect(bars[1]).not.toHaveClass('filled-class');
  });

  it('renders correct number of filled bars for Medelsvår', () => {
    const { container } = render(renderDifficultyBars(45, mockStyle));
    expect(screen.getByText('Medelsvår')).toBeInTheDocument();
    const bars = container.querySelectorAll(`.${mockStyle.bar}`);
    expect(bars).toHaveLength(4);
    expect(bars[0]).toHaveClass('filled-class');
    expect(bars[1]).toHaveClass('filled-class');
    expect(bars[2]).not.toHaveClass('filled-class');
  });

  it('renders correct number of filled bars for Svår', () => {
    const { container } = render(renderDifficultyBars(75, mockStyle));
    expect(screen.getByText('Svår')).toBeInTheDocument();
    const bars = container.querySelectorAll(`.${mockStyle.bar}`);
    expect(bars).toHaveLength(4);
    expect(bars[0]).toHaveClass('filled-class');
    expect(bars[1]).toHaveClass('filled-class');
    expect(bars[2]).toHaveClass('filled-class');
    expect(bars[3]).not.toHaveClass('filled-class');
  });

  it('renders correct number of filled bars for Komplicerad', () => {
    const { container } = render(renderDifficultyBars(95, mockStyle));
    expect(screen.getByText('Komplicerad')).toBeInTheDocument();
    const bars = container.querySelectorAll(`.${mockStyle.bar}`);
    expect(bars).toHaveLength(4);
    expect(bars[0]).toHaveClass('filled-class');
    expect(bars[1]).toHaveClass('filled-class');
    expect(bars[2]).toHaveClass('filled-class');
    expect(bars[3]).toHaveClass('filled-class');
  });
});