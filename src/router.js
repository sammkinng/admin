// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './pages/Dashboard.vue'
import Poll from './pages/Poll.vue'
import Blog from './pages/Blog.vue'



const router = createRouter({
    history: createWebHistory(), routes: [
        { path: '/', component: Dashboard },
        { path: '/poll', component: Poll },
        { path: '/blog', component: Blog }
    ]
});



export default router;
