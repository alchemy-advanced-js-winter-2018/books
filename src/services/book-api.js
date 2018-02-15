const URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:';
const API_KEY = 'AIzaSyCnNP1g1nyTkcW6BjorD93gN-ueMhUWg0I';

export function getBooks(search, maxResults = 10, startIndex = 0) {
  const url = `${URL}${search}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=newest&key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json());
}