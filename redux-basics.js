const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    // HANDLE ALL THE ACTIONS
    if(action.type === 'INC_COUNTER') {
        // Perform Operations
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    return state
}

// Store
const store = createStore(rootReducer)
console.log(store.getState())

// Subscribe --> THE MOMENT YOU CREATE THE STORE, SUBSCRIBE TO THE STORE
store.subscribe(() => {
    console.log('[Subscription] : ', store.getState())
})

// Dispatch Action
// store.dispatch(action)
store.dispatch( {type: 'INC_COUNTER'} )
store.dispatch( {type: 'ADD_COUNTER', payload: 10} )
console.log(store.getState())