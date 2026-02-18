import { createWebHistory, 
    createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Shop from "./pages/Shop.vue";
import Contact from "./pages/Contact.vue";
import Cart from "./pages/Cart.vue";

const routes=[
    {path: '/', component: Home },
    {path: '/contact', component: Contact },
    {path: '/shop', component: Shop },
    {path: '/login', component: Login },
    {path: '/cart', component: Cart },

]

export const router = createRouter(
    {history: createWebHistory(),
    routes,
}
)  