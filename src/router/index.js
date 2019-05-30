import Vue from 'vue'
import Router from 'vue-router'
import $storage from '../utils/storage'

Vue.use(Router)

// 登录页
const Login = () => import('@/view/login/Login');
// 后台页
const Index = () => import('@/view/index/Index');
// 主页
const Home = () => import('@/view/home/Home');
// 管理员管理
const Admin = () => import('@/view/Admin/admin');
// 分类管理
const Classify = () => import('@/view/classify/Classify');
// 商品管理
const Goods = () => import('@/view/goods/Goods');

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/admin',
                    name: 'admin',
                    component: Admin
                },
                {
                    path: '/classify',
                    name: 'classify',
                    component: Classify
                },
                {
                    path: '/goods',
                    name: 'goods',
                    component: Goods
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

// 路由守护
router.beforeEach((to, from, next) => {
    let token = $storage('token');

    if (token || to.fullPath == '/login') {
        next();
    } else {
        router.push({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        });
    }
});
export default router
