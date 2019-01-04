import * as React from 'react';
import * as ReactDOM from 'react-dom';

const API_TOKEN = ''

// const rootEl = document.getElementById('root')
// rootEl ? ReactDOM.render(null, rootEl) : false;

fetch('https://beta.todoist.com/API/v8/projects',
 {
   headers: {
     Authorization: `Bearer ${API_TOKEN}`
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });