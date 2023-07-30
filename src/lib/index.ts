import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyAV7Pw0n0xQkzrPq5zPM1fz1utpkGoEOaY',
	authDomain: 'practisign.firebaseapp.com',
	projectId: 'practisign',
	storageBucket: 'practisign.appspot.com',
	messagingSenderId: '614639788222',
	appId: '1:614639788222:web:49fd13d45575611bf4feef'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const store = writable({});