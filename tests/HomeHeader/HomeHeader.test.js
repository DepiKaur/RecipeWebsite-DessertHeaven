import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomeHeader from '../../src/components/Header/HomeHeader';

describe('HomeHeader component', () => {
    test('renders "Dessert Heaven" as a text', () => {
        // arrange
        render(<HomeHeader />);
    
        //assert
        const titleElement = screen.getByText('Dessert Heaven');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders "taste of heaven" as a text', () => {
        render(<HomeHeader />);

        const headerCitationElement = screen.getByText('taste of heaven', { exact: false });
        expect(headerCitationElement).toBeInTheDocument();
    });

    test('renders "all desserts" as a text', () => {
        render(<HomeHeader />);

        const headerCitationElement = screen.queryByText('all desserts', { exact: false });   // here the getByText() will throw an error
        expect(headerCitationElement).not.toBeInTheDocument();                                // so, queryByText() is used instead  
    });
});