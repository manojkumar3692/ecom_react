import { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer'
const Cart = createContext()

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0, 3, 4, 6, 7]),
        codAvailable: faker.datatype.boolean(),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }))
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })
    return <Cart.Provider value={{ state, dispatch }}>
        {children}
    </Cart.Provider>
}

export const CartState = () => {
    return useContext(Cart);
}


export default Context