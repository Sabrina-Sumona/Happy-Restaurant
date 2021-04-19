// owner: "Sabrina"
// if (action.type === "TEST") {
//     return {
//         ...state,
//         owner: action.str,
//     }
// }

// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     console.log("mapStateToProps: ", state);
//     return {
//         dishes: state.dishes,
//         owner: state.owner
//     }
// }

// componentDidMount() {
//     // console.log("Home State: ", this.state);
//     console.log("Home Props: ", this.props);
//     this.props.dispatch({
//         type: "TEST",
//         str: "Sumona"
//     })
// }

// componentDidUpdate() {
//     console.log("Home Props Updated: ", this.props);
// }

// export default connect(mapStateToProps)(Home);

// export default connect()(CommentForm);
// export default connect(null, mapDispatchToProps)(CommentForm);

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
// }

// export const Reducer = (state = initialState, action) => {
//     // console.log("From Reducer: ", action);
//     if (action.type === 'ADD_COMMENT') {
//         let comment = action.payload;
//         // new id will be placed in the index of length of existing array
//         comment.id = state.comments.length;
//         comment.date = new Date().toDateString();
//         console.log(comment);
//         return {
//             ...state,
//             // new comment is concated with the existing comments
//             comments: state.comments.concat(comment)
//         }
//     }
//     return state;
// }