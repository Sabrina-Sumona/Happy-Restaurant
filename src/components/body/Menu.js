import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actionCreators';
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
            dispatch(addComment(dishId, rating, author, comment))
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

    render() {
        document.title = "Menu";
        // dishes & comments are no longer states, now these are props
        const menu = this.props.dishes.map(item => {
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
                    <CardColumns>
                        {menu}
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
                <Loading />
            </div >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);