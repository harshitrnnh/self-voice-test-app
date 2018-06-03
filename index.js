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

//   return res.json({
//     speech: speech,
//     displayText: speech,
//     source: "dialog-flow-test-self-voice"
//   });
// });

restService.post("/audio", function(req, res) {
  //var speech = req.body.queryResult.parameters.statement_num
  var speech = "";
  var param = req.body.queryResult.parameters.statement_num;
  if (param == "1"){speech = "found one";}
  switch (req.body.queryResult.parameters.statement_num) {
    //Speech Synthesis Markup Language 
    case "1":
      speech = "<speak><audio src=“https://…test.mp3”>didn’t get your MP3 audio file</audio></speak>;
        //'<audio src="https://raw.githubusercontent.com/harshitrnnh/self-voice-test-app/master/1.wav">did not get your audio file</audio>';
      break;
     case "2":
      speech =
        '<audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio>';
      break;
          case "3":
      speech =
        '<audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio>';
      break;
          case "4":
      speech =
        '<audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">did not get your audio file</audio>';
      break;
  } 
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
//       let responseObj={
//          "fulfillmentText":speech,
//   "payload": {
//     "google": {
//       "expectUserResponse": true,
//       "richResponse": {
//         "items": [
//           {
//             "simpleResponse": {
//               "ssml": speech,
//               "displayText": "This is a SSML sample. Make sure your sound is enabled to hear the demo"
//             }
//           }
//         ]
//       }
//     }
//   }
// }
      
//         let responseObj={
//      "fulfillmentText":speech
//     ,"fulfillmentMessages":[
//         {
//             "text": {
//                 "text": [
//                     speech
//                 ]
//             }
//         }
//     ]
//     ,"source":""
// }
 // return res.json(responseObj);});

restService.post("/video", function(req, res) {
  return res.json({
    speech:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    source: "dialog-flow-test-self-voice"
  });
});

restService.post("/slack-test", function(req, res) {
  var slack_message = {
    text: "Details of JIRA board for Browse and Commerce",
    attachments: [
      {
        title: "JIRA Board",
        title_link: "http://www.google.com",
        color: "#36a64f",

        fields: [
          {
            title: "Epic Count",
            value: "50",
            short: "false"
          },
          {
            title: "Story Count",
            value: "40",
            short: "false"
          }
        ],

        thumb_url:
          "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
      },
      {
        title: "Story status count",
        title_link: "http://www.google.com",
        color: "#f49e42",

        fields: [
          {
            title: "Not started",
            value: "50",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          }
        ]
      }
    ]
  };
  return res.json({
    speech: "speech",
    displayText: "speech",
    source: "webhook-echo-sample",
    data: {
      slack: slack_message
    }
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
