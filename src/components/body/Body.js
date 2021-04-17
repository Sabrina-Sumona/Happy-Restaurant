import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Redirect } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            {/* <Menu /> */}
            <Route path="/home" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Redirect from="/" to="/home" />
        </div>
    );
}

export default Body;