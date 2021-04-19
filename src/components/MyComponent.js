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

// // must be uppercase
// type: 'ADD_COMMENT',

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
// }

// if (action.type === 'ADD_COMMENT') {
//     let comment = action.payload;
//     comment.id = commentState.length;
//     comment.date = new Date().toDateString();
//     console.log(comment);
//     return commentState.concat(comment);
// }
// return commentState;

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

// // to all dispatch together outside of the component
// const mapDispatchToProps = dispatch => {
//     return {
//         addComment: (dishId, rating, author, comment) => dispatch(
//         )
//     }
//     // we can use more dispath here
//     // delete Comment: (dishId, rating, author, comment) =>     dispatch({
//     //     ......
//     //  })
//     // }
// }

{/* <div className="row">
    <div className="col-6">
        {menu}
    </div>
    <div className="col-6">
        {dishDetail}
    </div>
</div> */}

// we can't use directly timeout when action dispatch, for that the 3rdd function is used
// normal redux only support an obj into the dispatch
// but thunk allows redux to use a dispatch into another dispatch

