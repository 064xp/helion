import firebase from 'firebase';
import 'firebase/firestore'
import config from './firebaseConfig';

firebase.initializeApp(config);

export default firebase;
