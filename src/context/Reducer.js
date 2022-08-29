export const cartReducer = (state, payload) => {
    switch (payload.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, ...state.products.filter((each) => each.id === payload.data)] }
            break
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter((each) => each.id !== payload.data) }
            break
        default:
            return state
    }
}
