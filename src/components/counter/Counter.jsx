import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/reducers/counterReducer'
import { getCounterValue } from '../../store/selectors/getCounterValue/getCounterValue'

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid='counter-value'>{value}</h1>
            <button data-testid='decrement-button' onClick={onDecrement}>dec</button>
            <button data-testid='increment-button' onClick={onIncrement}>inc</button>
        </div>
    )
}

export default Counter