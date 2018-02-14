import Store from 'charly-state-store';
import { getBooks } from './services/book-api';

export default class Book extends Store{
  constructor(){
    super();

    this.state = {

    };
  }

}