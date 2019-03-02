import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from './components/Loading';

const Home = Loadable({
    loader: () => import('./templates/Pages/Home'),
    loading: Loading,
});

const Header = Loadable({
    loader: () => import('./templates/Layout/Header'),
    loading: Loading,
});

const isIE = /*@cc_on!@*/false || !!document.documentMode;

class Root extends Component {
    render() {
        return (
            <section className={isIE ? 'ie' : ''}>
                <Header />
                <Router>
                    <Route path="/" component={Home} />
                </Router>
            </section>
        );
    }
}

export default Root;
