import React, { Component } from 'react';
import comingsoon from '../../data/comingsoon.jpg';
import { CardColumns, CardImg } from 'reactstrap';

class Home extends Component {

    render() {
        document.title = "Happy Restaurant";
        return (
            <div>
                <CardColumns className="hmimg">
                    <CardImg top src={comingsoon} alt={"comingsoon"} />
                </CardColumns>
            </div>
        );
    }
}

export default Home;