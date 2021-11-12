import { CHEESE_PORTIONS, units } from '~/components/calculator/calculator.const';

interface Aliment {
  type: string;
  id: string;
  portions: number;
  unit: string;
  isVegeFriendly: boolean;
  kcal?: number;
}

interface CalculateResultsParams {
  numberOfAdults: number;
  numberOfChildren: number;
  food: Aliment[];
  extra: Aliment[];
  capacity: number;
}

export function calculateResults({ numberOfAdults, numberOfChildren, food, extra, capacity }: CalculateResultsParams) {
  const quantity = numberOfAdults + numberOfChildren / 2;
  const adultKcal = 1300;
  const childKcal = 600;
  const totalKcal = adultKcal * numberOfAdults + childKcal * numberOfChildren;

  let currentKcal = 0;
  let newQuantity = quantity;

  [...food, ...extra].forEach(aliment => {
    if (aliment.kcal) {
      currentKcal += aliment.kcal * newQuantity;
    }
  });

  while (currentKcal < totalKcal) {
    currentKcal = 0;
    newQuantity += 0.5;
    [...food, ...extra].forEach(aliment => {
      if (aliment.kcal) {
        currentKcal += aliment.kcal * newQuantity;
      }
    });
  }

  return [
    ...food.map((aliment) => ({
      ...aliment,
      quantity: aliment.portions * newQuantity * capacity,
    })),
    ...extra.map((aliment) => ({
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
