import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


describe('router test', () => {

    test('router test', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-page-main');
        const aboutLink = screen.getByTestId('about-page-main');
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })

    test('error page test', () => {
        render(
            <MemoryRouter initialEntries={['/error12']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    })
})

