import { createApp } from 'vue';
import App from './App.vue';
import "./assets/app.css";

import {initializeApp} from 'firebase/app';
import { environment } from './environment';
import router from './router';

export const fbApp=initializeApp(environment.firebaseConfig);

createApp(App).use(router).mount('#app');
