const API_KEY = 'AIzaSyAoODC168yeXM1wuYrPRWKDiYSzaRa4kwU';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:';

export function getBooks(search, searchSize){
  const url = `${URL}${search}&maxResults=${searchSize}&key=${API_KEY}`;

  return fetch(url)
    .then(response => response.json());
}