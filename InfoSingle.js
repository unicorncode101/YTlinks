const url2 = require("url")
const url= 'https://www.youtube.com/watch?v=rCSZrWd7X3I';
const rp = require('request-promise');
var output;


rp(url)
  .then(function(html){
output= html
// buscar la parte importante en el code html y  javascript 
var foundit = output.indexOf("videoPrimaryInfoRenderer")
var ends= foundit+ 5000;
var subpart = output.substr(foundit,ends)
var cutups= subpart.split('}')
var messyViews = cutups[2].split(":")
var messytitle = cutups[0].split(":")
var titleOnly = messytitle[4]
var cleanViews = messyViews[4]

console.log("Title : " + titleOnly + "\t views :" + cleanViews)
  })
  .catch(function(err){
  	console.log(err)
    //handle error
  });



