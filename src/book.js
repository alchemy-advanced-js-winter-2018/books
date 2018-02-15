import Store from 'charly-state-store';
import { getBooks } from './services/book-api';

export default class Book extends Store{
  constructor(){
    super();

    this.state = {
      search: [],
      topic: '',
      title: '',
      searchSize: 10,
      page: 0
    };

    const section = document.getElementById('bookSect');
    this.form = section.querySelector('form');
    this.heading = section.querySelector('h1');
    this.h2 = section.querySelector('h2');
    this.list = section.querySelector('ul');
    this.searchSize = section.querySelector('select');
    this.prev = section.querySelector('#prev');
    this.next = section.querySelector('#next');

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const topic = this.form.elements.topic.value;
      this.setState({ topic });
      this.searchBook();
    });

    this.searchSize.addEventListener('change', () => {
      const searchSize = this.searchSize.value;
      this.setState({ searchSize });
      this.searchBook();
    });

    this.prev.addEventListener('click', () => {
      let num = (this.page < 10) ? 0 : -10;
      
      this.setState({
        page: this.state.page - num
      });
      this.searchBook();
    });
  
    this.next.addEventListener('click', () => {
      this.setState({
        page: this.state.page + 10
      });
      this.searchBook();
    });

    this.subscribe(() => this.render());
    this.render();
  }

  searchBook(){
    const { topic, searchSize, page } = this.state;
    getBooks(topic, searchSize, page)
      .then(response => {
        this.setState({
          search: response.items,
          totalItems: response.totalItems
        });
      }).catch(err=>{
        return ('server error', err);
      });
  }

  render(){
    const { heading, list, h2 } = this;

    list.innerHTML = null;
    
    const { search, topic, totalItems } = this.state;
    if(!search){
      heading.textContent = 'No results';
    }

    h2.innerHTML = `${totalItems} books about ${topic}.`;

    search.map(n => {
      const li = document.createElement('li');
      li.textContent = `${n.volumeInfo.title}   ----  by Author: ${n.volumeInfo.authors}`;
      const link = document.createElement('a');
      link.textContent = 'preview';
      link.setAttribute('href', `${n.volumeInfo.previewLink}`);
      link.setAttribute('target', '=_blank');
      li.appendChild(link);
      return li;
    })
      .forEach(li => list.appendChild(li));

  }
}

