import { ADULT_KCAL, CHILD_KCAL, units } from '@/components/calculator/calculator.const';
import { countKcal, calculateResults } from '@/components/calculator/calculator.computed';

const food = [
    {
        type: 'base',
        id: 'jambon-blanc',
        portions: 1,
        unit: units.SLICE,
        isVegeFriendly: false,
        kcal: 120,
    },
    {
        type: 'base',
        id: 'bacon',
        portions: 4,
        unit: units.SLICE,
        isVegeFriendly: false,
        kcal: 50,
    },
    {
        type: 'base',
        id: 'chorizo',
        portions: 4,
        unit: units.SLICE,
        isVegeFriendly: false,
        kcal: 50,
    },
]

describe('CalculatorComputed', () => {
    describe('countKcal', () => {
        it('should count the kcal of all aliments', () => {
            expect(countKcal({ food, quantity: 2 })).toBe(440)
        })
    })

    describe('calculateResults', () => {
        it('should return the calculation result', () => {
            const params = {
                "capacity": 1,
                "numberOfAdults": 2,
                "numberOfChildren": 0,
                food,
            }

            const result = [
                {
                    "type": "base",
                    "id": "jambon-blanc",
                    "portions": 1,
                    "unit": "SLICE",
                    "isVegeFriendly": false,
                    "kcal": 120,
                    "quantity": 2
                },
                {
                    "type": "base",
                    "id": "bacon",
                    "portions": 4,
                    "unit": "SLICE",
                    "isVegeFriendly": false,
                    "kcal": 50,
                    "quantity": 8
                },
                {
                    "type": "base",
                    "id": "chorizo",
                    "portions": 4,
                    "unit": "SLICE",
                    "isVegeFriendly": false,
                    "kcal": 50,
                    "quantity": 8
                },
                {
                    "id": "raclette-cheese",
                    "portions": 215,
                    "quantity": 430,
                    "unit": "GRAMS"
                }
            ]

            expect(calculateResults(params)).toEqual(result)
        })
    })
})
