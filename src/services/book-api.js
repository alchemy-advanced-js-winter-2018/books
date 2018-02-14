const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
const API_KEY = 'AIzaSyCnNP1g1nyTkcW6BjorD93gN-ueMhUWg0I';

export function getBooks(search, page = 1, pageSize = 20) {
    const url = `${URL}&q=${search}&page=${page}&pageSize=${pageSize}&key=${API_KEY}`;

    return fetch(url)
    .then(response => response.json());
}