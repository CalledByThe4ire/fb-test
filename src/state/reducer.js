import { v4 as uuidv4 } from 'uuid';
import { TOGGLE_PRODUCT } from './types';

export const initialState = [
  {
    id: uuidv4(),
    descriptionMapping: {
      default: 'Сказочное заморское яство',
      hovered: 'Котэ не одобряет?'
    },
    name: 'Нямушка',
    topping: 'с фуа-гра',
    featuresMapping: {
      enums: [
        {
          plurals: ['порция', 'порции', 'порций'],
          count: 10,
          phrase: '',
        },
        {
          plurals: ['мышь', 'мыши', 'мышей'],
          count: 1,
          phrase: 'в подарок',
        },
      ],
      stuff: [],
    },
    weight: 0.5,
    annotation: 'Печень утки разварная с артишоками.',
    isSelected: false,
    isFinished: false,
  },
  {
    id: uuidv4(),
    descriptionMapping: {
      default: 'Сказочное заморское яство',
      hovered: 'Котэ не одобряет?'
    },
    name: 'Нямушка',
    topping: 'с рыбой',
    featuresMapping: {
      enums: [
        {
          plurals: ['порция', 'порции', 'порций'],
          count: 40,
          phrase: '',
        },
        {
          plurals: ['мышь', 'мыши', 'мышей'],
          count: 2,
          phrase: '',
        },
      ],
      stuff: [],
    },
    weight: 2,
    annotation: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    isSelected: false,
    isFinished: false,
  },
  {
    id: uuidv4(),
    descriptionMapping: {
      default: 'Сказочное заморское яство',
      hovered: 'Котэ не одобряет?'
    },
    name: 'Нямушка',
    topping: 'с курой',
    featuresMapping: {
      enums: [
        {
          plurals: ['порция', 'порции', 'порций'],
          count: 100,
          phrase: '',
        },
        {
          plurals: ['мышь', 'мыши', 'мышей'],
          count: 5,
          phrase: 'в подарок',
        },
      ],
      stuff: ['заказчик доволен'],
    },
    weight: 5,
    annotation: 'Филе из цыплят с трюфелями в бульоне.',
    isSelected: false,
    isFinished: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_PRODUCT:
      return state.map((item) =>
        item.id === action.payload && !item.isFinished
          ? {...item, isSelected: !item.isSelected}
          : item
      );
    default:
      return state;
  }
};

export default reducer;
