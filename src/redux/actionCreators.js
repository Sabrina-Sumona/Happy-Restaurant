import * as actionTypes from './actionTypes';
import DISHES from '../data/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesloading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesloading());
    setTimeout(() => {
        dispatch(loadDishes(DISHES))
    }, 500);
}