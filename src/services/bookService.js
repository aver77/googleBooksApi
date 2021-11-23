export default class BookService {
    _apiKey = 'AIzaSyDFsrHKjL-As2f-M3AVUyc86zcY_Y3wtIs';
    _apiBase = 'https://www.googleapis.com/books/v1';

    async getResourse(url) {
        console.log(`${this._apiBase}${url}&key=${this._apiKey}`);
        const res = await fetch(`${this._apiBase}${url}&key=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        // return await res.text();
        return await res.json();
    }

    async getNumberOfBooksByParams(searchReq, subject, orderBy, startIndex, endIndex) {
        if (subject === 'all')
            return await this.getResourse(`/volumes?q=${searchReq}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${endIndex}`);
        else 
            return await this.getResourse(`/volumes?q=${searchReq}+subject:${subject}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${endIndex}`);
    }

}