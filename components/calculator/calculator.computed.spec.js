import { units } from '~/components/calculator/calculator.const';
import { countKcal, calculateResults } from '~/components/calculator/calculator.computed';

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
            expect(countKcal(food, 2)).toBe(440)
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
                    "quantity": 12 
                }, 
                { 
                    "type": "base", 
                    "id": "bacon", 
                    "portions": 4, 
                    "unit": "SLICE", 
                    "isVegeFriendly": false, 
                    "kcal": 50, 
                    "quantity": 48 
                }, 
                { 
                    "type": "base", 
                    "id": "chorizo", 
                    "portions": 4,
                    "unit": "SLICE", 
                    "isVegeFriendly": false, 
                    "kcal": 50, 
                    "quantity": 48
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