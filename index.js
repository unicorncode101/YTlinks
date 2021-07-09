
// como buscar los  video mas nuevos de un chanel  sin usar google api 
// npm i request-promise  fs url
const url2 = require("url")
const url = 'https://www.youtube.com/user/lveministerio/videos'

const rp = require('request-promise');
var output;

var savetofiledata =""
var listadeIds = [];
var fullurl = (url2.parse(url).pathname).split('/')
//console.log(fullurl[2])
var channelName= fullurl[2]

var htmlHeadstuff= "<html><head><style>*{margin:0;}img{width:200px;height:200px,display:flex,flex-wrap:wrap;padding:20px;}h1{text-transform: uppercase;}</style></head><body><center><h1>" +channelName + "</h1></center>" ;
var endofhtml = "</body></html>"
rp(url)
  .then(function(html){
    //success!
output= html


var parts = output.split("ytInitialData = ")
var part2 = parts[1].split("<link")
var part3 = part2[0].split('https')

work(part3)


  })
  .catch(function(err){
    //handle error
  });



function work(stuff) {



var i =0; 
//console.log(htmlHeadstuff)
savetofiledata = htmlHeadstuff 
while(i < stuff.length)

{

//console.log("Searching for id : " + stuff[i] + "\n")

var stuff2 = stuff[i].split(",")

var nextstep = stuff2[0].replace("}" , "")
var nextstep2 = nextstep.replace(/(^"|"$)/g, '')
var nextStep3 = nextstep2.replace(
  "://","")


var moreSteps = nextStep3.split("?")

if(moreSteps.length>0){

//buscar  que  sea una imagine  y lo demas  no 
if(moreSteps[0].indexOf(".jpg") >-1)
{

// ahacer  un elemento para  usar la imagen   

if(listadeIds.indexOf(moreSteps[0]) < 0){
listadeIds.push(moreSteps[0])
var Id = showID('https://' + moreSteps[0])
savetofiledata= savetofiledata+ "<a href= 'https://www.youtube.com/watch?v="+Id +"'><img src='https://" +moreSteps[0]  + "'/></a>";

//console.log("<img src='https://" +moreSteps[0]  + "'/><br>")

}

}

}


	i++;

}
savetofiledata = savetofiledata + endofhtml 
//console.log(endofhtml)
saveToFile(savetofiledata)
}
function saveToFile(data2,savetofile){
const fs = require('fs')


if(channelName >"" ){

 // console.log(channelName)
}
else{
channelName="output"

}
try {
  const data = fs.writeFileSync('./'+channelName+".html", data2)
  //file written successfully
} catch (err) {
  console.error(err)
}

}

function showID(ids){

 
 var stuff2 = url2.parse(ids).pathname;
var parts = stuff2.split('/')
//console.log(parts[2])
return parts[2]
}
