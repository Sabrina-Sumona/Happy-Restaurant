import React, { Component } from 'react';
import { baseUrl } from '../../redux/baseUrl';
import { CardColumns, CardImg } from 'reactstrap';

class Home extends Component {

    render() {
        document.title = "Happy Restaurant";
        return (
            <div>
                <CardColumns className="hmimg">
                    <CardImg top src={baseUrl + "homescreen.image"} alt={"comingsoon"} />
                </CardColumns>
            </div>
        );
    }
}

export default Home;