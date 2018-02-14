const URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyC15YhYq4uguEcPkzx7byzQQjKxiljDbuo';

export function getBooks(searchInput, page = 1, pageSize = 20){
    const url = `${URL}?q=${searchInput}&key=${API_KEY}`;

    return fetch(url)
        .then(response => response.json());
}