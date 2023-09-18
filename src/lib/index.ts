import { initializeApp } from 'firebase/app';
import { getAuth, type User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

const firebaseConfig = {
  apiKey: "AIzaSyAV7Pw0n0xQkzrPq5zPM1fz1utpkGoEOaY",
  authDomain: "practisign.firebaseapp.com",
  projectId: "practisign",
  storageBucket: "practisign.appspot.com",
  messagingSenderId: "614639788222",
  appId: "1:614639788222:web:49fd13d45575611bf4feef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const store = writable({
  loggedIn: false,
  isSigninIn: false,
  showPassword: false
});

function userStore() {
  let unsubscribe: (() => void) | null = null; // Initialize the unsubscribe function

  const store = writable<User | null>(null, (set) => {
    unsubscribe = auth.onAuthStateChanged((user) => {
      console.info('a new user has been set');
      set(user);
    });
  });

  // Unsubscribe when the store is destroyed
  store.subscribe(() => {
    return () => {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }
    };
  });

  return store;
}

export const user = userStore();

// Usage: Load function in your
