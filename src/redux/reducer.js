import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
}

export const Reducer = (state = initialState, action) => {
    // console.log("From Reducer: ", action);
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        // new id will be placed in the index of length of existing array
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        console.log(comment);
        return {
            ...state,
            // new comment is concated with the existing comments
            comments: state.comments.concat(comment)
        }
    }
    return state;
}