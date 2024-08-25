import { createRouter ,createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue';
import About from '../views/home/About.vue';
import TheWelcome from '../components/TheWelcome.vue'
import UserDetails from '@/views/users/UserDetails.vue';
import EditUserDetails from '@/views/users/EditUserDetails.vue';
import UserLogin from '@/views/users/UserLogin.vue';

const routes=[{
    path:"/",
    name:"Home",
    component:Home
},
{
path:"/about",
name:"About",
component:About
},
{
path:"/welcome",
name:"welcome",
component:TheWelcome
},
{
path:"/edituser",
name:"edituser",
component:EditUserDetails
},
{
path:"/myaccount",
name:"myaccount",
component:UserDetails
},
{
path:"/login",
name:"userlogin",
component:UserLogin
}
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;