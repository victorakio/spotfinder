import axios from 'axios';

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1'
  }, 
);

export default spotify;