import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    owner: "Sabrina"
}

export const Reducer = (state = initialState, action) => {
    // console.log("From Reducer: ", action)
    if (action.type === "TEST") {
        return {
            ...state,
            owner: action.str,
        }
    }
    return state;
}