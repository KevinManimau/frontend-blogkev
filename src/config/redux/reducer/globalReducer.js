const initialState = {
    name: 'prawito'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return{
            ...state,
            name: 'Manimau'
        }
    }
    return state;
}

export default globalReducer;