import Store from 'charly-state-store';
import { getBooks } from './services/book-api';

export default class Book extends Store {
  constructor() {
    super();

    this.state = {
      book: null,
      page: 1,
      maxResults: 20
    };

    const section = document.getElementById('books');
    this.heading = section.querySelector('h2');
    this.form = section.querySelector('form');
    this.list = section.querySelector('ul');
    this.maxResults = section.querySelector('select');
    this.prev = section.querySelector('#prev');
    this.next = section.querySelector('#next');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const search = this.form.elements.search.value;
      this.setState({ search });
      this.searchBooks();
    });

    this.maxResults.addEventListener('change', () => {
      const maxResults = this.maxResults.value;
      this.setState({ maxResults });
      this.searchBooks();
    });

    this.prev.addEventListener('click', () => {
      this.setState({
        page: this.state.page - 1
      });
      this.searchBooks();
    });

    this.next.addEventListener('click', () => {
      this.setState({
        page: this.state.page + 1
      });
      this.searchBooks();
    });

    this.subscribe(() => this.render());
    this.render();
  }

  searchBooks() {
    const { search, page, maxResults } = this.state;

    getBooks(search, page, maxResults)
      .then(response => {
        this.setState({
          books: response.books,
          total: response.totalResults,
          error: null
        });
      })
      .catch(err => {
        return 'Server Error' + err;
      });
  }

  render() {
    const { heading, list } = this;

    list.innerHTML = null;

    const { search, books, total, page, maxResults } = this.state;
    
    if(!books) {
      heading.textContent = 'Please enter a search word';
      return;
    }

    const totalPages = Math.ceil(total / maxResults);

    heading.textContent = `Results: page ${page} of ${totalPages} about ${search}`;

    this.prev.disabled = page === 1;
    this.next.disabled = page === totalPages;

    books
      .map(n => {
        const li = document.createElement('li');
        li.textContent = n.title;
        return li;
      })
      .forEach(li => list.appendChild(li));

  }
}