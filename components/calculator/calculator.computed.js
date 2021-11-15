import { CHEESE_PORTIONS, units, ADULT_KCAL, CHILD_KCAL } from '@/components/calculator/calculator.const';

// exported for testing purposes
export function countKcal(food, quantity) {
  return food.reduce((previousValue, currentValue) => previousValue + currentValue.kcal * quantity, 0)
}

export function calculateResults({ numberOfAdults, numberOfChildren, food, capacity }) {
  const quantity = numberOfAdults + numberOfChildren / 2;
  const totalKcal = ADULT_KCAL * numberOfAdults + CHILD_KCAL * numberOfChildren;

  let currentKcal = 0;
  let newQuantity = quantity;

  currentKcal = countKcal(food, newQuantity);

  while (currentKcal < totalKcal) {
    currentKcal = 0;
    newQuantity += 0.5;
    currentKcal = countKcal(food, newQuantity);
  }

  return [
    ...food.map((aliment) => ({
      ...aliment,
      quantity: aliment.portions * newQuantity * capacity,
    })),
    {
      id: 'raclette-cheese',
      portions: CHEESE_PORTIONS,
      // Pour le fromage on utilise la quantité par défaut sans appliquer de pondération
      quantity: quantity * capacity * CHEESE_PORTIONS,
      unit: units.GRAMS,
    },
  ]
}
