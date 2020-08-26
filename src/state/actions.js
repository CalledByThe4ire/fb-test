import { TOGGLE_PRODUCT } from './types';

export const toggleProduct = (productId) => ({
  type: TOGGLE_PRODUCT,
  payload: productId,
});

