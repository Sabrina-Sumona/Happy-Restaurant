import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, CardImg, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../redux/actionCreators';
import Loading from './Loading';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) =>
            dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        document.title = "Menu";
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)}
                    />
                );
            })

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment} />
            }
            return (
                <div className="container">
                    <div className="row" style={{ textAlign: "right" }}>
                        <CardColumns style={{ padding: "20px", margin: "10px" }}>
                            {menu}
                        </CardColumns>
                        <CardColumns className="center">
                            <CardImg top src="/assets/images/comingsoon.jpg" alt={"comingsoon"} />
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalHeader id='button'>
                                <Button color="primary" onClick={this.toggleModal}>
                                    X
                            </Button>
                            </ModalHeader>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                        </Modal>
                    </div>
                </div >
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);