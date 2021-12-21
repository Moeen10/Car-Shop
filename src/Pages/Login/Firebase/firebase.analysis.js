import { getAnalytics } from "firebase/analytics";
import firebaseInitializeApplication from "./firebase.init";
// import firebaseInitializeApplication from "./firebase.init";

const app = firebaseInitializeApplication();
const firebaseAnalysis = () => {

    return getAnalytics( app);
}

export default firebaseAnalysis;