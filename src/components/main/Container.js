import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Intro from './Intro';
import Project from './Project';

const Container = () => {

    return (
        <section className="section">
            <div className="container">
                        <Switch>
                            <Route path="/" exact > <Intro /> </Route>
                            <Route path="/project" > <Project /> </Route>
                            <Route path="/contact" > <Contact /> </Route>
                        </Switch>
            </div>
        </section>
    );
};

export default Container;