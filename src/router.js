// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './pages/Dashboard.vue'
import Poll from './pages/Poll.vue'
import Blog from './pages/Blog.vue'
import Result from './pages/Result.vue'
import Edit_Poll from './pages/Edit_Poll.vue'


const router = createRouter({
    history: createWebHistory(), routes: [
        { path: '/', component: Dashboard },
        { path: '/poll', component: Poll },
        { path: '/blog', component: Blog },
        { path: '/result', component: Result },
        {path:'/poll/edit/:id',component:Edit_Poll,props:true},
        {path:'/blog/edit/:id',component:Edit_Poll,props:true}
    ]
});



export default router;
