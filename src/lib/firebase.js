import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
	apiKey: 'AIzaSyCw0PndUOeHNtRhgQeex9JG0VQDSwaVS8w',
	authDomain: 'jiffy-425.firebaseapp.com',
	projectId: 'jiffy-425',
	storageBucket: 'jiffy-425.appspot.com',
	messagingSenderId: '1000886773910',
	appId: '1:1000886773910:web:ae9739e6a630661c097ab7'
};

// Initialize Firebase
const app = initializeApp(config);
export const db = getFirestore(app);
export const bucket = getStorage(app, `gs://${config.storageBucket}`);
