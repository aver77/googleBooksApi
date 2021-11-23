// eslint-disable-next-line
import React, { useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import BookPage from '../../pages/BookPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const App = () => {

    return (
        <Router>
            <Route path='/' component={Header}/>
            <Route path='/' exact component={Main}/>
            <Route path='/:id' component={BookPage}/>
        </Router>
    );
};

export default App;
