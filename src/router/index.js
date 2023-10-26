import { createRouter, createWebHistory } from 'vue-router'
import AuthIndex from '../auth/Index.vue';
import Auth from '../auth/Auth.vue'
import Register from '../auth/Register.vue'
import LogIn from '../auth/LogIn.vue'
import HomeDefault from '../components/HomeDefault.vue'
import Home from '@/views/Home.vue'
import History from '@/views/History.vue'
import Wallet from '@/views/Wallet.vue'
import WalletSave from '@/views/WalletSave.vue'
import Payment from '@/views/Payment.vue'
import Settings from '@/views/Settings.vue'
import Notifications from '@/views/Notifications.vue'


const routes = [
  { 
    path: '/', 
    name: "Registered",
    component: HomeDefault,
    children: [
        {path: '/', name: "Home", component: Home},
        {path: 'history', name: "History", component: History},
        {path: 'wallet', name: "Wallet", component: Wallet},
        {path: 'wallet/save', name: "WalletSave", component: WalletSave},
        {path: 'payment', name: "Payment", component: Payment},
        {path: 'settings', name: "Settings", component: Settings},
        {path: 'notifications', name: "Notifications", component: Notifications},
    ]
  },
  {
    path: '/auth', 
    name: 'Auth',
    component: AuthIndex,
    children: [
        {path: '', name: "AuthIn", component: Auth},
        {path: 'login', name: "LogIn", component: LogIn},
        {path: 'register', name: "Register", component: Register}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
