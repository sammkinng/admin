import { createApp } from 'vue';
import App from './App.vue';
import "./assets/app.css";

import {initializeApp} from 'firebase/app';
import { environment } from './environment';
import router from './router';

import {getFirestore} from 'firebase/firestore/lite';

const fbApp=initializeApp(environment.firebaseConfig);
export const db = getFirestore(fbApp)

createApp(App).use(router).mount('#app');
