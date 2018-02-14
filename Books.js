import Store from 'jacobs-state-store';
import { getBooks } from 'services/books-api.js';

export default class Books extends Store {
    constructor(){
        super();

        this.state = {
            books: null,
            page: 1,
            pageSize: 20
        };
    }

    searchBooks(){
        const{topic, page, pageSize} = this.state;

        getBooks('anything')
            .then(response => console.log(response))
                .catch(err => {
                    console.error('ERROR');
                });
    }







}