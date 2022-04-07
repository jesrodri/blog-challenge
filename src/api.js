const axios = require('axios').default;

export const api_posts = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})
