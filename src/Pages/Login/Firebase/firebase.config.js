const firebaseConfig = {

  //   apiKey: "AIzaSyD4wr5vc9BJbo3t8EMEeTKXL4XJ-XPTGxg",
  // authDomain: "assignment12-8f955.firebaseapp.com",
  // projectId: "assignment12-8f955",
  // storageBucket: "assignment12-8f955.appspot.com",
  // messagingSenderId: "777604159846",
  // appId: "1:777604159846:web:b2fb2165e9ef8ac6bed0a7"


  apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;