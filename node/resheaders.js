const axios = require('axios');

axios.get('http://localhost:3000')
  .then(response => {
    // Log response headers
    console.log('Response Headers:', response.headers);

    // Log response data
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
