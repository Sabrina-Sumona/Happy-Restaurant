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