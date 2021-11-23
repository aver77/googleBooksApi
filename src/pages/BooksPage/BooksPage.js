/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import SingleBook from './SingleBook';
import bookService from '../../services/bookService';
import { connect } from 'react-redux';
import Empty from '../../components/Empty';
import { booksError, booksLoaded, booksRequested} from '../../redux/actions';
import {Link} from 'react-router-dom'

import Error from '../../components/Error';
import Loading from '../../components/Loading';

import noImage from '../../images/noImagePic.jpg';

const BooksPage = ({setRes,booksRequested, booksLoaded, booksError, books, allBooks, loading, error, searchReq, sortingBy, categories, startIndex, endIndex}) => {

    //Поочередно отображаем 30 книг
    const {items} = books;

    useEffect(() => {
        setRes(books.totalItems); //массив из 30 обьектов
    }, [books.totalItems])

    useEffect(() => {
        if (searchReq) {
            booksRequested();
            const BS = new bookService();
            BS.getNumberOfBooksByParams(searchReq,categories,sortingBy,startIndex,endIndex)
            .then((res) => {
                booksLoaded(res);
            })
            .catch(() => {
                booksError();
            });
        }

    }, [booksError, booksLoaded, booksRequested, categories, endIndex, searchReq, sortingBy, startIndex]);

    if (error && searchReq)
        return <Error/>
    
    if (loading && searchReq)
        return <Loading/>
     
    if (searchReq && !books.totalItems) {
        return <Empty/>
    }

    if (searchReq && books.totalItems > 0) {
        return (
            <div className="books">
                {
                    items.map(item => {
                        const {volumeInfo} = item;
                        const {imageLinks, categories, title, authors} = volumeInfo;
                        const isImageLinks = volumeInfo.hasOwnProperty('imageLinks');
                        let propsImg;
                        isImageLinks? propsImg = imageLinks.thumbnail : propsImg = noImage;
                        return (
                            <div 
                                key={item.id} 
                                className = "book__single"
                            >
                                <Link to={`/${item.id}`}>
                                    <SingleBook pic={propsImg} cat={categories} name={title} author={authors}/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return null;
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        allBooks: state.allBooks,
        searchReq: state.searchReq,
        sortingBy: state.sortingBy,
        categories: state.categories,

        loading: state.loading,
        error: state.error,

        startIndex: state.startIndex,
        endIndex: state.endIndex,

    }
}

const mapDispatchToProps =  {
    booksRequested,
    booksLoaded,
    booksError
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksPage);