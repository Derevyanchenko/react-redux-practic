// consts
const ADD_CASH = 'ADD_CASH'
const GET_CASH = 'GET_CASH'

// reducer
const initialState = {
    cash: 0
}

export const cashReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}

        case GET_CASH:
            return {...state, cash: state.cash - action.payload }

        default:
            return state
    }
}

// Action Creators
export const addCashAction = (payload) => ({
    type: ADD_CASH,
    payload: payload
})

export const getCashAction = (payload) => ({
    type: GET_CASH,
    payload: payload
})