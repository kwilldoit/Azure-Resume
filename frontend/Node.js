const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Create a new DOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>');

// Access the window and document objects
const window = dom.window;
const document = window.document;

// Now, you can use the window and document objects as if you were working in a browser
window.addEventListener('DOMContentLoaded', (event) => {
    // Your code here
const functionApi = 'http://localhost:7071/api/KWCounterTrigger1';

const getVisitCount = () => {
       let count = 30;
       fetch(functionApi).then(response => {
          return response.json()
       }).then(response =>{
            console.log("Website caled functionAPI")
            count = response.count;
            document.getElementById("counter").innerText = count;
       }).catch(function(error){
           console.log(error);
       });
       return count; 
}

// Execute your code here
})
