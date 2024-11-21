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

// Le nombre de calories en kcal pour un repas tout compris
export const ADULT_KCAL = 500;
export const CHILD_KCAL = 250;

// Les données pour le fromage à raclette qui est automatiquement ajouté à la liste des ingrédients
export const RACLETTE_CHEESE = {
  id: 'raclette-cheese',
  portions: {min: 225, max: 235},
  unit: units.GRAMS,
  kcal: 840,
}

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
    portions: 5,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 50,
  },
  {
    type: 'base',
    id: 'bacon',
    portions: 20,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 44,
  },
  {
    type: 'base',
    id: 'chorizo',
    portions: 20,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 70,
  },
  {
    type: 'base',
    id: 'coppa',
    portions: 15,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 75,
  },
  {
    type: 'base',
    id: 'jambon-cru',
    portions: 5,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 50,
  },
  {
    type: 'base',
    id: 'grison',
    portions: 15,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 50,
  },
  {
    type: 'base',
    id: 'rosette',
    portions: 15,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 120,
  },
  {
    type: 'base',
    id: 'patate',
    portions: 1400,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 215,
  },
  // EXTRA
  {
    type: 'extra',
    id: 'cornichon',
    portions: 25,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 1,
  },
  {
    type: 'extra',
    id: 'oignon-rouge',
    portions: 2.5,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 20,
  },
  {
    type: 'extra',
    id: 'mushrooms',
    portions: 6.0,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 20,
  },
  {
    type: 'extra',
    id: 'lettuce',
    portions: 500,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 27,
  },
  {
    type: 'extra',
    id: 'pain',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 276,
  }
];
