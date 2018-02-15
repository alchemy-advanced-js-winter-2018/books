import Store from 'charly-state-store';
import { getBooks } from './services/book-api';

export default class Book extends Store{
  constructor(){
    super();

    this.state = {
      search: [],
      topic: '',
      title: ''
    };

    const section = document.getElementById('bookSect');
    this.form = section.querySelector('form');
    this.heading = section.querySelector('h1');
    this.list = section.querySelector('ul');
    this.pageSize = section.querySelector('select');
    this.prev = section.querySelector('#prev');
    this.next = section.querySelector('#next');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const topic = this.form.elements.topic.value;
      this.setState({ topic });
      this.searchBook();
    });
    this.subscribe(() => this.render());
    this.render();
  }

  searchBook(){
    const { search, topic } = this.state;
    console.log(topic);
    getBooks(topic)
      .then(response => {
        this.setState({
          search: response.items
        });
      }).catch(err=>{
        return ('server error', err);
      });
  }

  render(){
    const { heading, list } = this;

    list.innerHTML = null;

    const { search, topic } = this.state;
    console.log(search);
    if(!search){
      heading.textContent = 'No results';
    }

    search.map(n => {
      const li = document.createElement('li');
      li.textContent = n.volumeInfo.title;
      return li;
    })
      .forEach(li => list.appendChild(li));

  }
}

