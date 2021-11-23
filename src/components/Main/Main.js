import React, { useState } from 'react';
import { connect } from 'react-redux';
import { booksLoadMore } from '../../redux/actions';
import { BooksPage } from '../../pages/BooksPage';
import './Main.scss';

const Main = ({booksLoadMore}) => {
    const [results, setResults] = useState(0);

    const setRes = (value) => {
        setResults(value);
    }

    return (
        <div className="main">
            <div className="main__items">
                <p className="main__found">Found {!results?'0':results} results</p>
            </div>
            <div className="main__books-items _container">
                <BooksPage setRes={setRes}/>
            </div>
            <div className="main__load">
                <button onClick={() => booksLoadMore()} className="main__btn-load">Load more</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    booksLoadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);