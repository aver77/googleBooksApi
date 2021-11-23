import React from 'react';
import './BooksPage.scss';

//компонент одной
const SingleBook = ({id, pic, cat, name, author}) => {
    return (
        <>
            <div className="book__pic-elem">
                <img className="book__pic-single" src={pic?pic:''} alt="book pic" />
            </div>
            <div className="book__text-single">
                <p className="book__cat-single">{cat?cat:''}</p>
                <p className="book__name-single">{name?name:''}</p>
                <p className="book__author-single">{author?author:''}</p>
            </div>
        </>
    );
};

export default SingleBook;