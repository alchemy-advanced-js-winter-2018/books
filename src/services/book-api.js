const API_KEY = 'AIzaSyAoODC168yeXM1wuYrPRWKDiYSzaRa4kwU';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:';


//dog&key=AIzaSyAoODC168yeXM1wuYrPRWKDiYSzaRa4kwU

export function getBooks(search){
  const url = `${URL}${search}&key=${API_KEY}`;

  return fetch(url)
    .then(response => response.json());
}