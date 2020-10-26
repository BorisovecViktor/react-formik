import { Action } from 'redux';


const SET_PRODUCTS = 'SET_PRODUCTS';

type SetProductsAction = Action<typeof SET_PRODUCTS> & {
  products: Product[];
};

export const setProducts = (products: Product[]) => ({ type: SET_PRODUCTS, products });

type PossibleActions = SetProductsAction;

const reducer = (products: Product[] = [], action: PossibleActions) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;

    default:
      return products;
  }
};

export default reducer;
