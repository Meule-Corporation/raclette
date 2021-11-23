import {
  CHEESE_PORTIONS,
  units,
  ADULT_KCAL,
  CHILD_KCAL, CHEESE_KCAL
} from '@/components/calculator/calculator.const';

export function calculateResults({
  numberOfAdults,
  numberOfChildren,
  food,
  capacity,
}) {
  const initialQuantity = numberOfAdults + numberOfChildren / 2;
  // Pour le fromage on utilise la quantité par défaut sans appliquer de pondération
  const cheeseQuantity = initialQuantity * capacity * CHEESE_PORTIONS;
  const totalKcal = capacity * (ADULT_KCAL * numberOfAdults + CHILD_KCAL * numberOfChildren) - CHEESE_KCAL * cheeseQuantity;
  const quantityStep = 0.1;

  let currentKcal = 0;
  let quantity = 0;

  while (currentKcal < totalKcal) {
    quantity += quantityStep;
    currentKcal = countKcal({ food, quantity });
  }

  return [
    ...food.map((aliment) => ({
      ...aliment,
      quantity: determineQuantity({
        aliment,
        newQuantity: Math.round(quantity),
        capacity,
        quantity: initialQuantity,
      }),
    })),
    {
      id: 'raclette-cheese',
      portions: CHEESE_PORTIONS,
      quantity: cheeseQuantity,
      unit: units.GRAMS,
    },
  ];
}

// exported for testing purposes
export function countKcal({ food, quantity }) {
  return food
    .filter((aliment) => aliment.kcal)
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.kcal * quantity,
      0
    );
}

/*
  Sur certains aliments on ne met pas de kcal et on utilise la quantité par
  défaut car on ne veut pas pondérer du coup on ne met pas la propriété kcal
  dans la liste des ingrédients
*/
function determineQuantity({ aliment, newQuantity, capacity, quantity }) {
  if (aliment.kcal) {
    return aliment.portions * newQuantity * capacity;
  }
  return aliment.portions * quantity * capacity;
}
