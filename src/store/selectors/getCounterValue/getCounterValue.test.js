import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {

    test('getCounterValue should return correct data when empty obj was passed', () => {
       expect(getCounterValue({})).toBe(0)
    })

    test('getCounterValue should return correct data', () => {
        expect(getCounterValue({ counter: {
            value: 8
        } })).toBe(8)
     })
})