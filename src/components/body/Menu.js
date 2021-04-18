import React, { Component } from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import COMMENTS from '../../data/comments.js';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false,
        comments: COMMENTS,
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
        // this.toggleModal
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const menu = this.state.dishes.map(item => {
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
            const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetail dish={this.state.selectedDish} comments={comments} />
        }
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-6">
                        {menu}
                    </div>*/}
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    {/*<div className="col-6">
                        {dishDetail}
                    </div> */}
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal} >
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal} >
                                Exit
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;