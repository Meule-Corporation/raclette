import { units } from '@/components/calculator/calculator.const';
import { countKcal } from '@/components/calculator/calculator.computed';

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
})
