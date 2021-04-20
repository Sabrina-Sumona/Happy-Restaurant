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

// import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

// constructor(props) {
//     super(props);
//     this.state = {
//         firstname: "",
//         lastname: "",
//         telnum: "",
//         email: "",
//         agree: false,
//         contactType: 'Tel.',
//         message: ""
//     }
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
// }

// handleInputChange = event => {
//     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//     const name = event.target.name;
//     this.setState({
//         [name]: value
//     })
// }

// handleSubmit = event => {
//     console.log(this.state);
//     event.preventDefault();
// }

{/* <Form onSubmit={this.handleSubmit}> */ }
{/* <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} /> */ }
{/* <Input type="text" name="lastname" value={this.state.lastname} placeholder="Last Name" onChange={this.handleInputChange} /> */ }
{/* <Input type="tel" name="telnum" value={this.state.telnum} placeholder="Tel. Number" onChange={this.handleInputChange} /> */ }
{/* <Input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} /> */ }
{/* <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> */ }
{/* <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} ><option>Tel.</option><option>Email</option></Input> */ }
{/* <Input type="textarea" name="message" value={this.state.message} rows="12" onChange={this.handleInputChange} ></Input> */ }

// import { LocalForm, Control, Errors } from 'react-redux-form';
{/* <LocalForm></LocalForm> */ }

// export default Contact;