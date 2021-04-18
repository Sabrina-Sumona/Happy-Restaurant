import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    sample: "Owner of Happy Restaurant is Sabrina Sumona"
}

export const Reducer = (state = initialState, action) => {
    return state;
}