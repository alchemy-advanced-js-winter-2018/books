const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = 'AIzaSyC15YhYq4uguEcPkzx7byzQQjKxiljDbuo';

export function getBooks(search, page = 1, pageSize = 20, startIndex = 0){
    const url = `${URL}${search}&maxResults=${pageSize}&startIndex=${startIndex}&orderBy=newest&key=${API_KEY}`;

    return fetch(url)
        .then(response => response.json());
}