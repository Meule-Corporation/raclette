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

/**
 * type: soit un aliment de base "base" ou un petit extra qui fait plaisir "extra"
 * id: identifiant de l'ingrédient qui doit correspondre à sa clé pour la traduction dans le fichier JSON
 * portions: le facteur multiplicateur à utiliser pour chaque personne, il peut s'agir de tranches, de grammes
 * unit: l'unité à utiliser pour l'affichage des résultats
 */
export const food = [
  // BASE
  {
    type: 'base',
    id: 'jambon-blanc',
    portions: 1,
    unit: units.SLICE,
    isVegeFriendly: false,
  },
  {
    type: 'base',
    id: 'bacon',
    portions: 4,
    unit: units.SLICE,
    isVegeFriendly: false,
  },
  {
    type: 'base',
    id: 'chorizo',
    portions: 4,
    unit: units.SLICE,
    isVegeFriendly: false,
  },
  {
    type: 'base',
    id: 'coppa',
    portions: 3,
    unit: units.SLICE,
    isVegeFriendly: false,
  },
  {
    type: 'base',
    id: 'jambon-cru',
    portions: 1,
    unit: units.SLICE,
    isVegeFriendly: false,
  },
  {
    type: 'base',
    id: 'rosette',
    portions: 3,
    unit: units.SLICE,
    isVegeFriendly: false,
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
  },
  {
    type: 'extra',
    id: 'oignon-rouge',
    portions: 0.5,
    unit: units.ITEM,
    isVegeFriendly: true,
  },
  {
    type: 'extra',
    id: 'mushrooms',
    portions: 1.2,
    unit: units.ITEM,
    isVegeFriendly: true,
  },
];
