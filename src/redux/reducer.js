const initialState = {
    loading: true,
    error: false,
    books: [],
    startIndex: 0,
    endIndex: 30,
    searchReq: '', //name
    categories: 'all',
    sortingBy: 'relevance'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
            }
        case 'BOOKS_LOAD_MORE':
            return {
                ...state,
                startIndex: state.startIndex + 30,
            }
            
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                loading: true
            }

        case 'BOOKS_SET':
            return {
                ...state,
                searchReq: action.bookName,
                categories: action.cat,
                sortingBy: action.sortingBy
            }

        case 'BOOKS_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;