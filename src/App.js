// import React, { Component } from 'react';
// import logo from './logo.svg';
// import Webcam from 'react-webcam';
// import './App.css';

// const auth = require('google-auth-library');
// const oauth2client = new auth.OAuth2Client("105896916842075441324", "64c7ff982ed545cb1ed7cfaf09e87990e91a1415", "https://accounts.google.com/o/oauth2/auth");
// const authUrl = oauth2client.generateAuthUrl({
//   access_type: 'offline',
//   scope: [    // scopes for Dialogflow
//     'https://www.googleapis.com/auth/cloud-platform',
//     'https://www.googleapis.com/auth/dialogflow'
//   ]
// });
// // redirect user to authUrl and wait for them coming back to callback_uri

// // in callback_uri handler, get the auth code from query string and obtain a token:
// (async () => {


// const tokenResponse = await oauth2client.getToken(code);
// oauth2client.setCredentials(tokenResponse.tokens);
// });



// // now use this oauth2client!
// const sessionClient = new dialogflow.SessionsClient({ auth: oauth2client });



// const WebcamComponent = () => <Webcam />;

// async function automlVisionPredict() {
// const automl = require('@google-cloud/automl').v1beta1;
// const fs = require('fs');
// const client = new automl.PredictionServiceClient();
// const projectId = "asldetector";
// const computeRegion = 'us-central1';
// const modelId = "ICN2260722618012319692";
// const filePath = App.capture.imageSrc.imageBytes;
// const scoreThreshold = "0.5";
// const modelFullId = client.modelPath(projectId, computeRegion, modelId);
// const content = filePath;
// const payload = {};
// const [response] =  client.predict({
//  name: modelFullId,
//  payload: payload,
//  //params: params,
// });
// console.log('Prediction results:');
// response.payload.forEach(result => {
//  console.log(`Predicted class name: ${result.displayName}`);
//  console.log(`Predicted class score: ${result.classification.score}`);
// });
// automlVisionPredict().catch(console.error);
// }
// /*class App extends React.Component {
//  render() {
//    return (
//      <div>
//          <Webcam />
//          <button>Capture photo</button>
//      </div>
//    );
//  }
// }*/
// const videoConstraints = {
//  width: 1280,
//  height: 720,
//  facingMode: "user"
// };
// const App = () => {
//  const webcamRef = React.useRef(null);
//  const capture = React.useCallback(
//    () => {
//      const imageSrc = webcamRef.current.getScreenshot();
//      console.log(imageSrc);
//      const payload = {};
//      payload.image = {imageBytes: imageSrc};
//    },
//    [webcamRef]
//  );
//  return (
//    <>
//      <Webcam
//        audio={false}
//        height={720}
//        ref={webcamRef}
//        screenshotFormat="image/jpeg"
//        width={1280}
//        videoConstraints={videoConstraints}
//      />
//      <button onClick={capture}>Capture photo</button>
//    </>
//  );
// };
// automlVisionPredict();
// export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import Webcam from 'react-webcam';
import $ from 'jquery';
import './App.css';
//import './nodeserver.js';

const videoConstraints = {
  width: 1200,
  height: 720,
  facingMode: "user"
};

class WebcamComponent extends React.Component {
  webcamRef;
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: null
    }
    this.capture = this.capture.bind(this);
  }

  capture = () => {
    // debugger;
    const imageSrc = this.webcamRef.getScreenshot();
    //  debugger;
    this.setState({
      imageSrc
    });

    //makes request to localhost, if deploying need to look into CORS
    fetch('http://localhost:3000/picture', {
            headers: { 
              'crossDomain': true,
              'Authorization': 'jayq-591@asldetector.iam.gserviceaccount.com'
            },
            method: "POST",
            body: imageSrc
          })
    .then((response) => {
      console.log(response);
    })
  }

  render() {

    return (
      <center>
          <div>
            <h1>ASL Translator</h1>
            <Webcam
              audio={false}
              height={360}
              ref={(ref) => {
                this.webcamRef = ref;
              }}
              screenshotFormat="image/jpeg"
              width={660}
              videoConstraints={videoConstraints}
            />
            <button onClick={this.capture}>Capture photo</button>
            { this.state.imageSrc && (<img src={this.state.imageSrc}/>)}
            {/* {this.WebcamCapture.imageSrc} */}
            {/* <getPrediction /> */}
          </div>
      </center>
        );
  }
}
 
class App extends React.Component {
  render() {
    const videoConstraints = {
      facingMode: { exact: "environment" }
    };
 
    return <WebcamComponent  />;
  }
}

export default App;
