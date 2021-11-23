import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Error from '../../components/Error';
import noImage from '../../images/noImagePic.jpg';

import './BookPage.scss';

const BookPage = ({books, match}) => {

    // \o/
    useEffect(() => {
        const inp = document.querySelector('.header__text-input');
        const cat = document.querySelector('.header__categories');
        const sort = document.querySelector('.header__sorting');
        inp.disabled = true;
        cat.disabled = true;
        sort.disabled = true;
        return () => {
            inp.disabled = false;
            cat.disabled = false;
            sort.disabled = false;
        }
    })

    const {items} = books;
    if (!items) return (
        <div className="main__books-items _container">
            {
                <Error/>
            }
        </div>
    )

    const item = items.find(elem => elem.id === match.params.id);

    const {volumeInfo} = item;
    const {imageLinks, categories, title, authors, description} = volumeInfo;

    const isImageLinks = volumeInfo.hasOwnProperty('imageLinks');
    let propsImg;
    isImageLinks? propsImg = imageLinks.thumbnail : propsImg = noImage;
    
    return (
        <div className="book-info__items">
            <div className="book-info__img">
                <img className="book-info__elem-img" src={propsImg} alt="book pic" />
            </div>
            <div className="book-info__text">
                <p className="book-info__elem-cat">{categories?categories:''}</p>
                <p className="book-info__elem-name">{title?title:''}</p>
                <p className="book-info__elem-author">{authors?authors:''}</p>
                <div className="book-info__elem-border">
                    <p className="book-info__elem-desc">{description?description:''}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookPage));