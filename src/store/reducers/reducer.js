const initialState = {
    age: 21,
    history: []
};

const reducer = (state = initialState, action) => {
    const newSate = { ...state };
    console.log("AGE:", state.age);
    switch (action.type) {
        case 'AGE_UP_ASYNC':
            return {
                age: ++newSate.age,
                history: newSate.history.concat(
                    { id: Math.floor(Math.random() * 100000) + 10000, age: newSate.age }
                )
            }
        case 'AGE_DOWN':
            return {
                age: --newSate.age,
                history: newSate.history.concat(
                    { id: Math.floor(Math.random() * 100000) + 10000, age: newSate.age }
                )
            }
        case 'DEL_ITEM_ASYNC':
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.payload)
            }
        default:
            return state
    }
};
export default reducer