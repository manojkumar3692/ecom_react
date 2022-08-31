export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, ...state.products.filter((each) => each.id === action.data)] }
            break
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter((each) => each.id !== action.data) }
            break
        default:
            return state
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY':
            return { ...state, sortBy: action.payload }
            break;
        case 'FILTER_BY_RATING':
            return { ...state, byRating: action.payload }
            break;
        case 'FILTER_BY_SEARCH':
            return { ...state, searchQuery: action.payload }
            break;
        default:
            throw new Error('Error in product')
    }
}