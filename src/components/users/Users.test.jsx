import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import Users from './Users';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../tests/utils/renderWithRouter';

jest.mock('axios');

describe('users test', () => {
    let response

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('users should be rendered correctly', async () => {

        axios.get.mockReturnValue(response)
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        )
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)
        expect(axios.get).toBeCalledTimes(1)
    })

    test('redirect to particular user should work correctly', async () => {

        axios.get.mockReturnValue(response)
        renderWithRouter(<Users />)
        const users = await screen.findAllByTestId('user-item')
        userEvent.click(users[0])
        expect(screen.getByTestId('details-page')).toBeInTheDocument()
    })
})