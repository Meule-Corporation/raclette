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
 * type: soit un aliment de base "default" ou un petit extra qui fait plaisir "extra"
 * id: identifiant de l'ingrédient qui doit correspondre à sa clé pour la traduction dans le fichier JSON
 * portions: le facteur multiplicateur à utiliser pour chaque personne, il peut s'agir de tranches, de grammes
 * unit: l'unité à utiliser pour l'affichage des résultats
 */
export const food = [
  // DEFAULT
  { type: 'default', id: 'jambon-blanc', portions: 1, unit: units.SLICE },
  { type: 'default', id: 'bacon', portions: 4, unit: units.SLICE },
  { type: 'default', id: 'chorizo', portions: 4, unit: units.SLICE },
  { type: 'default', id: 'coppa', portions: 3, unit: units.SLICE },
  { type: 'default', id: 'jambon-cru', portions: 1, unit: units.SLICE },
  { type: 'default', id: 'rosette', portions: 3, unit: units.SLICE },
  { type: 'default', id: 'patate', portions: 280, unit: units.GRAMS },
  // EXTRA
  {
    type: 'extra',
    id: 'cornichon',
    portions: 5,
    unit: units.ITEM,
  },
  {
    type: 'extra',
    id: 'oignon-rouge',
    portions: 0.5,
    unit: units.ITEM,
  },
  {
    type: 'extra',
    id: 'mushrooms',
    portions: 1.2,
    unit: units.ITEM,
  },
];
