export const units = {
  SLICE: 'SLICE',
  GRAMS: 'GRAMS',
  ITEM: 'ITEM',
  HALF_GRINDSTONE: 'HALF_GRINDSTONE',
};

export const states = {
  INITIAL: 'INITIAL',
  LOADING_RESULTS: 'LOADING_RESULTS',
  DISPLAY_RESULTS: 'DISPLAY_RESULTS',
};

// Le temps de calcul initial en secondes lorsque l'IA n'est pas entraînée
export const LOADING_TIME = 5;
// La portion de raclette en grammes par adulte
export const CHEESE_PORTIONS = 215;
// Le nombre de calories en kcal pour un repas tout compris
export const ADULT_KCAL = 1000;
export const CHILD_KCAL = 600;
// Le nombre de calories en kcal pour 1g de fromage à raclette
export const CHEESE_KCAL = 110 / 30;

/**
 * type: soit un aliment de base "base" ou un petit extra qui fait plaisir "extra"
 * id: identifiant de l'ingrédient qui doit correspondre à sa clé pour la traduction dans le fichier JSON
 * portions: le facteur multiplicateur à utiliser pour chaque personne, il peut s'agir de tranches, de grammes
 * unit: l'unité à utiliser pour l'affichage des résultats
 * isVegeFriendly: indique si l'ingrédient est compatible avec les végétariens
 * kcal: le nombre de calories en kcal que représente l'ingrédient * portions
 */
export const food = [
  // BASE
  {
    type: 'base',
    id: 'jambon-blanc',
    portions: 1,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 50,
  },
  {
    type: 'base',
    id: 'bacon',
    portions: 4,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 90,
  },
  {
    type: 'base',
    id: 'chorizo',
    portions: 4,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 70,
  },
  {
    type: 'base',
    id: 'coppa',
    portions: 3,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 150,
  },
  {
    type: 'base',
    id: 'jambon-cru',
    portions: 1,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 50,
  },
  {
    type: 'base',
    id: 'rosette',
    portions: 3,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 285,
  },
  {
    type: 'base',
    id: 'patate',
    portions: 280,
    unit: units.GRAMS,
    isVegeFriendly: true,
  },
  // EXTRA
  {
    type: 'extra',
    id: 'cornichon',
    portions: 5,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 1,
  },
  {
    type: 'extra',
    id: 'oignon-rouge',
    portions: 0.5,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 20,
  },
  {
    type: 'extra',
    id: 'mushrooms',
    portions: 1.2,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 20,
  },
];
