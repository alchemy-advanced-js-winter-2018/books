import Store from 'charly-state-store';
import { getBooks } from './services/book-api';

export default class Book extends Store{
  constructor(){
    super();

    this.state = {
      search: null,
      topic: ''
    };

    const section = document.getElementById('bookSect');
    this.form = section.querySelector('form');
    this.heading = section.querySelector('h1');
    this.ul = section.querySelector('ul');
    this.pageSize = section.querySelector('select');
    this.prev = section.querySelector('#prev');
    this.next = section.querySelector('#next');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const topic = this.form.elements.topic.value;
      this.setState({ topic });
      this.searchBook();
    });

  }

  searchBook(){
    const { search, topic } = this.state;

    getBooks(topic)
      .then(response => {
        this.setState({
          result: response.items.volumeInfo.title
        });
      }).catch(err=>{
        return ('server error', err);
      });
  }

  render(){
    const { heading, list } = this;

    list.innerHTML = null;

    const { search, topic } = this.state;
    
    if(!search){
      heading.textContent = 'No results';
    }

    search.map(n => {
      const li = document.createElement('li');
      li.textContent = n.title;
      return li;
    })
      .forEach(li => list.appendChild(li));

  }
}

