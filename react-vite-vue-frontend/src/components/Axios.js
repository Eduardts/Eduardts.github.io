// Example Axios call in React.js
import axios from 'axios';

axios.get('http://127.0.0.1:8000/')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

