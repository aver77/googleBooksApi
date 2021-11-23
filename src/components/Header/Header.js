import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { booksParametersOnSet } from '../../redux/actions';

import './Header.scss';

import searchPic from '../../images/searchPic.png';
import { Link } from 'react-router-dom';

const Header = ({searchReq, booksParametersOnSet}) => {
    const [cat, setCat] = useState('all');
    const [sort, setSort] = useState('relevance');
    const newRef = useRef(null);
    
    const refHandler = () => {
        let result;
        !newRef? result='' : result=newRef.current.value;
        return result;
    }

    const sortingHandler = (e) => {
        setSort(e.target.value);
    }

    const categoryHandler = (e) => {
        setCat(e.target.value);
    }

    const keyPressHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchReq = refHandler();
            console.log(searchReq, cat, sort);
            booksParametersOnSet(searchReq, cat, sort);
        }
    }

    return (
        <div className="header">
            <div className="header__title">
                <Link to="/">
                    <p className="header__text-title">Search for books</p>
                </Link>
            </div>
            <div className="header__search">
                <input 
                    ref={newRef} 
                    className="header__text-input" 
                    type="text" 
                    placeholder="Search"
                    onKeyDown={keyPressHandler}
                />
                <img 
                    className="header__search-ico"
                    src={searchPic}
                    alt="search"
                    onClick={() => {
                            searchReq = refHandler();
                            booksParametersOnSet(searchReq, cat, sort);
                        }
                    } 
                />
            </div>
            <div className="header__select">
                <div className="header__category">
                    <label className="header__label-category" htmlFor="categories">Categories</label>
                    <select onChange={categoryHandler} className="header__categories" name="categories">
                        <option className="header__text-category" value="all" defaultValue>all</option>
                        <option className="header__text-category" value="art">art</option>
                        <option className="header__text-category" value="biography">biography</option>
                        <option className="header__text-category" value="computers">computers</option>
                        <option className="header__text-category" value="history">history</option>
                        <option className="header__text-category" value="medical">medical</option>
                        <option className="header__text-category" value="poetry">poetry</option>
                    </select>
                </div>
                <div className="header__sort">
                    <label className="header__label-sort" htmlFor="sorting">Sorting by</label>
                    <select onChange={sortingHandler} className="header__sorting" name="sorting">
                        <option className="header__text-sort" value="relevance" defaultValue>relevance</option>
                        <option className="header__text-sort" value="newest">newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        searchReq: state.searchReq
    }
}

const mapDispatchToProps = {
    booksParametersOnSet
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);