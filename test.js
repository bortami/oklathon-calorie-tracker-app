/*
var query = 'mushroom risotto'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/recipe?query=' + query,
    headers: { 'X-Api-Key': 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
*/

/*
const http = require('http');

const options = {
  hostname: 'https://api.calorieninjas.com',
  port: 80,
  path: '/v1/recipe?query=',
  method: 'GET'
  headers: { 'X-Api-Key': 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5'},
  contentType: 'application/json'
};

const req = http.request(options, res => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
*/

const axios = require('axios');

/*
const URL = 'https://api.calorieninjas.com'
const AuthStr = 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5'
*/
// Make request
/*
axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
  .then((response => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

/*
const AuthStr = 'Bearer '.concat(USER_TOKEN);
axios.get(URL, { headers: { Authorization: AuthStr } })
 .then(response => {
     // If request is good...
     console.log(response.data);
  })
 .catch((error) => {
     console.log('error ' + error);
  });

  */

/*
axios.get(URL, { 'headers': { 'Authorization': AuthStr } })
  .then((response => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

/*
const config = {
  headers: {
    Authorization: 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5',
  },
};

axios.get('https://api.calorieninjas.com/v1/nutrition?query=12oz%20onion%20and%20a%20tomato', config)
  .then((response) => {
    console.log('Protected data:', response.data);
  })
  .catch((error) => {
    console.error('Error fetching protected data:', error.message);
  });

/*

var query = '3lb carrots and a chicken sandwich'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

*/

//import axios from 'axios';

const apiKey = 'RN2x+V3YhTirpJM0ExxClQ==e1GElmIAUMseOMO5';

axios.get('https://api.calorieninjas.com/v1/nutrition?query=12oz%20onion%20and%20a%20tomato', {
  headers: {
    'X-API-Key': apiKey
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
