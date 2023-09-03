// Define our routing rules
import Registration from '../views/Registration.vue'
import Homepage from '../views/Homepage.vue'
import Aboutpage from '../views/Aboutpage.vue'
import Dashboard from '../views/Dashboard.vue'

import {createRouter, createWebHistory} from 'vue-router'

const router  =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path : "/",
            name: "Home",
            component: Homepage
        },
        {
            path : "/about",
            name: "About",
            component: Aboutpage
        },
        {
            path : "/registration",
            name: "Registration",
            component: Registration
        },
        {
            path : "/dashboard/:username/:email",
            name: "dashboard",
            component: Dashboard
        },
        {
            // path : "/post-details/:id",
            // name: "post details",
            // component: PostDetails,
            // children: [
            //     {
            //     path: "contact",
            //     name: "Contact",
            //     component: ContactView
            //     }
            // ]
        }


    ]
})

export default router