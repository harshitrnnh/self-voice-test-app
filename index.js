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
  var speech = "";
  var param = req.body.queryResult.parameters.statement_num;
  if (param == "1"){speech ="<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples. I can pause <break time=\"3\" />. I can play a sound <audio src=\"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg\">your wave file</audio>. I can speak in cardinals. Your position is <say-as interpret-as=\"cardinal\">10</say-as> in line. Or I can speak in ordinals. You are <say-as interpret-as=\"ordinal\">10</say-as> in line. Or I can even speak in digits. Your position in line is <say-as interpret-as=\"digits\">10</say-as>. I can also substitute phrases, like the <sub alias=\"World Wide Web Consortium\">W3C</sub>. Finally, I can speak a paragraph with two sentences. <p><s>This is sentence one.</s><s>This is sentence two.</s></p></speak>";
;}
//   switch (req.body.queryResult.parameters.statement_num) {
//     //Speech Synthesis Markup Language 
//     case "1":
//       speech = 
//        "<speak>Here are <say-as interpret-as=\"characters\">SSML</say-as> samples. I can pause <break time=\"3\" />. I can play a sound <audio src=\"https://actions.google.com/sounds/v1/alarms/winding_alarm_clock.ogg\">your wave file</audio>. I can speak in cardinals. Your position is <say-as interpret-as=\"cardinal\">10</say-as> in line. Or I can speak in ordinals. You are <say-as interpret-as=\"ordinal\">10</say-as> in line. Or I can even speak in digits. Your position in line is <say-as interpret-as=\"digits\">10</say-as>. I can also substitute phrases, like the <sub alias=\"World Wide Web Consortium\">W3C</sub>. Finally, I can speak a paragraph with two sentences. <p><s>This is sentence one.</s><s>This is sentence two.</s></p></speak>";
//         break;
//   } 
  
 let responseObj={
   
 "platform": "google",
  "type": "custom_payload",
  "payload": {
    "google": {
      "expectUserResponse": false,
   "isSsml": true,
      "noInputPrompts": [],
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "ssml": speech,
              "displayText": "This is a SSML sample. Make sure your sound is enabled to hear the demo"
            }
          }
        ]
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
