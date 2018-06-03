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
  //var param = req.body.queryResult.parameters.statement_num;
  //if (param == "1"){speech = "found one";}
  switch (req.body.queryResult.parameters.statement_num) {
    //Speech Synthesis Markup Language 
    case "1":
      speech = 
        '<speak><audio src=“https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg”>didn’t get your MP3 audio file</audio></speak>';
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
              "ssml":"<speak><audio src=“https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg”>didn’t get your MP3 audio file</audio></speak>"
              ,
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
