const URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:';
const API_KEY = 'AIzaSyCnNP1g1nyTkcW6BjorD93gN-ueMhUWg0I';

export function getBooks(search, page = 1, maxResults = 20) {
  const url = `${URL}${search}&page=${page}&maxResults=${maxResults}&orderBy=newest&key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json());
}


// &startIndex=${ maxResults / page }    Need to get the page to change when clicking next and prev. 