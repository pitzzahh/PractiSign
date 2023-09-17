import { redirect } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
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
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in the browser!')
    const { subscribe } = writable<User | null>(null)
    return { subscribe }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user)
    })

    return () => unsubscribe();
  });

  return { subscribe }
}

export const user = userStore()