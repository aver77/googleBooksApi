const booksLoaded = (BooksList) => {
    return {
        type: 'BOOKS_LOADED',
        payload: BooksList
    }
}

const booksLoadMore = () => {
    return {
        type: 'BOOKS_LOAD_MORE',
    }
}

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED',
    }
}

const booksParametersOnSet = (req, cat, sort) => {
    return {
        type: 'BOOKS_SET',
        bookName: req,
        cat: cat,
        sortingBy: sort
    }
}

const booksError = () => {
    return {
        type: 'BOOKS_ERROR'
    }
}



export {
    booksLoaded,
    booksLoadMore,
    booksRequested,
    booksError,
    booksParametersOnSet
}