// add background color = black   username = white  comment  :  green 

const fetch = require("node-fetch");
const  username = "James_The_Otro";
const url2 = "https://api.younow.com/php/api/broadcast/info/curId=0/user=" + username;

var results="";

 const getData = async url2 => {
  try {
    const response = await fetch(url2);
    const json = await response.json();
  

var i =0; 


displayComment(json['comments'])
  } catch (error) {
    console.log(error);
  }
};



getData(url2);


function displayComment(MSG){


var i =0
while(i < Object.keys(MSG).length){//console.log(MSG[i]['timestamp'] + "\r")
 console.log(  "<div class='msg'><b>" +MSG[i]['name'] + " </b>:" + MSG[0]['comment'] + "<div>\r");

i++;
}


}
