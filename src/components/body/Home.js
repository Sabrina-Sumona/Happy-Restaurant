import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log("mapStateToProps: ", state);
    return {
        dishes: state.dishes,
        owner: state.owner
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("Home State: ", this.state);
        console.log("Home Props: ", this.props);
    }
    render() {
        document.title = "Happy Restaurant";
        return (
            <div>

            </div>
        );
    }
}

// export default Home;
export default connect(mapStateToProps)(Home);