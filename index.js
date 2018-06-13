"use strict";

const express = require("express");
const bodyParser = require("body-parser");

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
  if (param.includes("weather")){speech ="<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples. I can pause <break time=\"3\" />. I can play a sound <audio src=\"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg\">your wave file</audio>. I can speak in cardinals. Your position is <say-as interpret-as=\"cardinal\">10</say-as> in line. Or I can speak in ordinals. You are <say-as interpret-as=\"ordinal\">10</say-as> in line. Or I can even speak in digits. Your position in line is <say-as interpret-as=\"digits\">10</say-as>. I can also substitute phrases, like the <sub alias=\"World Wide Web Consortium\">W3C</sub>. Finally, I can speak a paragraph with two sentences. <p><s>This is sentence one.</s><s>This is sentence two.</s></p></speak>";
                   }
  if (param.includes("weather")){speech ="<speak><seq><media begin=\"0.5s\"><speak>Who invented the Internet?</speak></media><media begin=\"2.0s\"><speak>The Internet was invented by cats.</speak><audio src=\"https://www.dropbox.com/s/k36qn2asef117tl/harshit-lyre.mp3?dl=1\"><desc></desc>text</audio><audio src=\"https://www.dropbox.com/s/k36qn2asef117tl/harshit-lyre2.mp3?dl=1\"><desc></desc>text</audio><audio src=\"https://www.dropbox.com/s/k36qn2asef117tl/harshit-lyre.mp3?dl=1\"><desc></desc>text</audio></media></seq></speak>"
                                }
  else if (param.includes("hotels")){speech ="<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples. I can pause <break time=\"3\" />. I can play a sound <audio src=\"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg\">your wave file</audio>. I can speak in cardinals. Your position is <say-as interpret-as=\"cardinal\">10</say-as> in line. Or I can speak in ordinals. You are <say-as interpret-as=\"ordinal\">10</say-as> in line. Or I can even speak in digits. Your position in line is <say-as interpret-as=\"digits\">10</say-as>. I can also substitute phrases, like the <sub alias=\"World Wide Web Consortium\">W3C</sub>. Finally, I can speak a paragraph with two sentences. <p><s>This is sentence one.</s><s>This is sentence two.</s></p></speak>"
                                }
  else{"<speak><media begin=\"0.5s\"><speak>i did not get that, please speak again.</speak>"}
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
