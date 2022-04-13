// consts
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

// reducer
const initialState = {
    customers: []
}

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload]
            }

        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }

        case REMOVE_CUSTOMERS:
            return {
                ...state, 
                customers: state.customers.filter(customer => customer.id !== action.payload)
            }

        default:
            return state
    }
}

// Action Creators
export const addCustomerAction = (payload) => ({
    type: ADD_CUSTOMER,
    payload: payload
})
// dispatch(addCustomerAction(customer))

export const removeCustomerAction = (payload) => ({
    type: REMOVE_CUSTOMERS,
    payload: payload
})
// dispatch(removeCustomerAction(id))

export const addManyCustomersAction = (payload) => ({
    type: ADD_MANY_CUSTOMERS,
    payload: payload
})
// dispatch(addCustomerAction(customer))