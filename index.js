
// como buscar los  video mas nuevos de un chanel  sin usar google api 
// npm i request-promise  fs 

const url = 'https://www.youtube.com/user/lveministerio/videos'
//const url = 'https://www.youtube.com/c/Shalom132/videos'
const rp = require('request-promise');
var output;
var htmlHeadstuff= "<html><head></head><body>";
var savetofiledata =""

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

savetofiledata= savetofiledata+ "<img src='https://" +moreSteps[0]  + "'/><br>";

//console.log("<img src='https://" +moreSteps[0]  + "'/><br>")


}

}


	i++;

}
savetofiledata = savetofiledata + endofhtml 
//console.log(endofhtml)
saveToFile(savetofiledata)
}
function saveToFile(data2){
const fs = require('fs')



try {
  const data = fs.writeFileSync('./output.html', data2)
  //file written successfully
} catch (err) {
  console.error(err)
}

}
