import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './templates/Pages/Home';
import Header from './templates/Layout/Header';

class Root extends Component {
    render() {
        return (
            <section>
                <Header />
                <Router>
                    <Route path="/" component={Home} />
                </Router>
            </section>
        );
    }
}

export default Root;
