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
  
  
  if (param.includes("weather")){speech ="<speak><audio src=\"https://www.dropbox.com/s/ldt5awk7vh12k8i/2%20-%20Weather.mp3?dl=1\"><desc></desc>Sounds great! The weather next week in that area will be around 18 to 23 degrees, a perfect weather for a trek.</audio></speak>";}
  
  else if (param.includes("hotels")|| param.includes("hotel") || param.includes("Hotels") || param.includes("Hotels")){speech ="<speak><audio src=\"https://www.dropbox.com/s/4axboff17tz9w2h/3%20-%20Hotel.mp3?dl=1\"><desc></desc>Sure! There are a few hotels that I can suggest - Hotel Lakeview is a 4 star property, and Hotel Vintage is a three star property that is available next week. I will send you an email with a complete list.</audio></speak>";}
  
  else if (param.includes("essentials")|| param.includes("Essentials") || param.includes("list") || param.includes("lists") || param.includes("essential") || param.includes("Essential")){speech ="<speak><audio src=\"https://www.dropbox.com/s/omuto5a94yc95p1/4%20-%20List.mp3?dl=1\"><desc></desc>Sure, i'll remember a list and remind you a few days before your travels.</audio></speak>";}
  
  else if (param.includes("preparatory") || param.includes("Preparatory") || param.includes("predatory") || param.includes("Predatory") || param.includes("proprietary") || param.includes("property")  || param.includes("safety") || param.includes("list")){speech ="<speak><audio src=\"https://www.dropbox.com/s/djl5q9ob7svt3t0/5%20-%20Preparatory%20Tips.mp3?dl=1\"><desc></desc>Don’t forget to book an insurance before your trek. Make sure you carry a first aid kit at all times. Always carry some spare energy food like trail nuts and protein bars. Most importantly, stay hydrated and have a blast. This ends our first session. Please bring an A4 sheet and pen next time.</audio></speak>";}
  
  else{speech ="<speak><audio src=\"https://www.dropbox.com/s/4ljezv7jpx91r5x/Didn%27t%20Understand.mp3?dl=1\"><desc></desc>Sorry, i didn't hear that. Could you say that again?</audio></speak>";}
//   switch (req.body.queryResult.parameters.statement_num) {
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
