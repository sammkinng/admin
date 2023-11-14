import { createApp } from 'vue';
import App from './App.vue';
import "./assets/app.css";

import {initializeApp} from 'firebase/app';
import { environment } from './environment';


export const fbApp=initializeApp(environment.firebaseConfig);

createApp(App).mount('#app');
