import Counter from './Counter';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { createReduxStore } from '../../store/store';

describe('counter test', () => {
    test('counter should be rendered correctly', () => {
        render(
            <Provider store={createReduxStore()}>
                <Counter />
            </Provider>
        )
        const incrementBtn = screen.getByTestId('increment-button')
        expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
        userEvent.click(incrementBtn)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
    })
})