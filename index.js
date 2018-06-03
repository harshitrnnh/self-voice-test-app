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
  var speech = req.body.queryResult.parameters.echoText
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
  //var param = req.body.queryResult.parameters.statement_num;
  //if (param == "1"){speech = "found one";}
  switch (req.body.queryResult.parameters.statement_num) {
    //Speech Synthesis Markup Language 
    case "1":
      speech = 
        '<speak><audio src=“https://raw.githubusercontent.com/harshitrnnh/self-voice-test-app/master/1.wav”>didn’t get your MP3 audio file</audio></speak>';
      break;
  } 
  
 let responseObj={
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "ssml": speech
              "displayText": "This is a SSML sample. Make sure your sound is enabled to hear the demo"
            }
          }
        ]
      }
    }
  }
}
 return res.json(responseObj);});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
