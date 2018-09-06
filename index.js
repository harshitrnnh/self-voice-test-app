"use strict";

const express = require("express");
const bodyParser = require("body-parser");
var count_weather = 0;

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech = req.body.queryResult.parameters.statement_num
  let responseObj={
     "fulfillmentText":speech
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    speech
                ]
            }
        }
    ]
    ,"source":""
}
  return res.json(responseObj);});
  
restService.post("/audio", function(req, res) {
  //var speech = req.body.queryResult.parameters.statement_num
  
//   var string = "foo",
//   substring = "weather";
 
  
  var speech = "";
  var param = req.body.queryResult.parameters.userText;
  if (param.includes("august") || param.includes("August")){speech ="<speak><audio src=\"https://www.dropbox.com/s/i53j4cp5ih8585d/ashwini-sentence-composite-1.mp3?dl=1\"><desc></desc>Sounds great! The weather next week in that area will be around 18 to 23 degrees, a perfect weather for a trek.</audio></speak>";}
  
  else if (param.includes("seven") || param.includes("7") || param.includes("Seven")){speech ="<speak><audio src=\"https://www.dropbox.com/s/pkeg3jkmxyqgc64/ashwini-sentence-composite-2.mp3?dl=1\"><desc></desc>Sounds great! The weather next week in that area will be around 18 to 23 degrees, a perfect weather for a trek.</audio></speak>";}
  
  else if (param.includes("yes") || param.includes("no") || param.includes("Yes") || param.includes("No")){speech ="<speak><audio src=\"https://www.dropbox.com/s/hvwui8l3uwzq8j9/ashwini-sentence-composite-3.mp3?dl=1\"><desc></desc>Sounds great! The weather next week in that area will be around 18 to 23 degrees, a perfect weather for a trek.</audio></speak>";}
  
  //else if (param.includes("yes") || param.includes("no") || param.includes("Yes") || param.includes("No")){speech ="<speak><audio src=\"https://www.dropbox.com/s/c415nl501yf4etn/anji-sentence-composite-4.mp3?dl=1\"><desc></desc>Sounds great! The weather next week in that area will be around 18 to 23 degrees, a perfect weather for a trek.</audio></speak>";}
  
  else if (param.includes("weather")|| param.includes("temperature") || param.includes("Weather")){speech ="<speak><audio src=\"https://www.dropbox.com/s/ihhjnq3vn7w1j8r/ashwini-sentence-composite-5.mp3?dl=1\"><desc></desc>Sounds great! The weather next week in that area will be around 18 to 23 degrees, a perfect weather for a trek.</audio></speak>";}
  
  else if (param.includes("hotels")|| param.includes("hotel") || param.includes("Hotels") || param.includes("Hotels")){speech ="<speak><audio src=\"https://www.dropbox.com/s/r1bj28ojnoxeylv/ashwini-sentence-composite-6.mp3?dl=1\"><desc></desc>Wonderful. Could you suggest some hotels to stay there?</audio></speak>";}
  
  else if (param.includes("essentials")|| param.includes("Essentials") || param.includes("list") || param.includes("lists") || param.includes("essential") || param.includes("Essential")){speech ="<speak><audio src=\"https://www.dropbox.com/s/e2y5t5gex9kq4dl/ashwini-sentence-composite-7.mp3?dl=1\"><desc></desc>Thanks. There's a few essential items i'll have to carry. Could you add knife, flashlight, jacket to the essentials list?</audio></speak>";}
  
  else if (param.includes("preparatory") || param.includes("Preparatory") || param.includes("predatory") || param.includes("Predatory") || param.includes("proprietary") || param.includes("property")  || param.includes("safety") || param.includes("list")){speech ="<speak><audio src=\"https://www.dropbox.com/s/y1rszgannxtx1oo/ashwini-sentence-composite-8.mp3?dl=1\"><desc></desc>Awesome! Are there any specific preparatory safety tips i should remember Hal?</audio></speak>";}
  
  else{speech ="<speak><audio src=\"https://www.dropbox.com/s/g8bxyuag9hiocfk/ashwini-sentence-composite-9.mp3?dl=1\"><desc></desc>Sorry, i didn't hear that. Could you say that again?</audio></speak>";}  
  //switch (req.body.queryResult.parameters.statement_num) {
//     //Speech Synthesis Markup Language 
//     case "1":
//       speech = 
//        "<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples. I can pause <break time=\"3\" />. I can play a sound <audio src=\"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg\">your wave file</audio>. I can speak in cardinals. Your position is <say-as interpret-as=\"cardinal\">10</say-as> in line. Or I can speak in ordinals. You are <say-as interpret-as=\"ordinal\">10</say-as> in line. Or I can even speak in digits. Your position in line is <say-as interpret-as=\"digits\">10</say-as>. I can also substitute phrases, like the <sub alias=\"World Wide Web Consortium\">W3C</sub>. Finally, I can speak a paragraph with two sentences. <p><s>This is sentence one.</s><s>This is sentence two.</s></p></speak>";
//         break;
//   } 
  //<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples. I can pause <break time=\"3\" />. I can play a sound <audio src=\"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg\">your wave file</audio>. I can speak in cardinals. Your position is <say-as interpret-as=\"cardinal\">10</say-as> in line. Or I can speak in ordinals. You are <say-as interpret-as=\"ordinal\">10</say-as> in line. Or I can even speak in digits. Your position in line is <say-as interpret-as=\"digits\">10</say-as>. I can also substitute phrases, like the <sub alias=\"World Wide Web Consortium\">W3C</sub>. Finally, I can speak a paragraph with two sentences. <p><s>This is sentence one.</s><s>This is sentence two.</s></p></speak>
  //"<speak><seq><media begin=\"0.5s\"><speak>Who invented the Internet?</speak></media><media begin=\"2.0s\"><speak>The Internet was invented by cats.</speak><audio src=\"https://www.dropbox.com/s/k36qn2asef117tl/harshit-lyre.mp3?dl=1\"><desc></desc>text</audio><audio src=\"https://www.dropbox.com/s/k36qn2asef117tl/harshit-lyre2.mp3?dl=1\"><desc></desc>text</audio><audio src=\"https://www.dropbox.com/s/k36qn2asef117tl/harshit-lyre.mp3?dl=1\"><desc></desc>text</audio></media></seq></speak>"
 let responseObj={
    "payload":{
     "google":{
       "expectUserResponse": true,
     "richResponse":{
        "items":[
           {
              "simpleResponse":{
                "displayText": "hi",
                "ssml":speech
              }
           },
           
        ],
        
     }
  }
}
 }
 
 return res.json(responseObj);});

// var port = process.env.PORT || 8000
// server.listen(port, function() {
//     console.log("App is running on port " + port);
// });

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
