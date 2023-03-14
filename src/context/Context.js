import React, { useContext } from 'react'
import {createContext} from 'react'
import {faker} from '@faker-js/faker'
import {useReducer,reducer} from 'react' 
import { cartReducer } from './Reducers'
import { productReducer } from './Reducers'


const Cart = createContext()
faker.seed(99);
const Context = ({children}) => {
const products = [...Array(20)].map(()=>({
id: faker.datatype.uuid(),
name: faker.commerce.productName(),
price: faker.commerce.price(),
image: faker.image.image(),
inStock: faker.helpers.arrayElement([0,3,5,7]),
fastDelivery: faker.datatype.boolean(),
ratings: faker.helpers.arrayElement([1,2,3,4,5])






}));

const [state, dispatch] = useReducer(cartReducer,{
    products: products,
    cart: [],})

const [productState, productDispatch] = useReducer(productReducer, 
  
  {
byStock: false,
byFastDelivery: false,
byRating:0,
searchQuery: "",



  });

  return <Cart.Provider value={{state,dispatch}}>
  {children}
  
  </Cart.Provider>
   
    return useContext(Cart)
  };
  


export default Context
export const CartState=()=> {
    return useContext (Cart)

}
