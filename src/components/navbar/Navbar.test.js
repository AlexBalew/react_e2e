import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../tests/utils/renderWithRouter';
import { Navbar } from './Navbar';

describe('navbar test', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('main-page link test', async () => {
        renderWithRouter(<Navbar />)
        const mainLink = screen.getByTestId('main-page-main');
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('about-page link test', async () => {
        renderWithRouter(<Navbar />)
        const aboutLink = screen.getByTestId('about-page-main');
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('users-page link test', async () => {
        renderWithRouter(<Navbar />)
        const usersLink = screen.getByTestId('users-page-main');
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})