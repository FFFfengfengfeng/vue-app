import Vue from 'vue'
import Router from 'vue-router'
import Storage from '../utils/storage'

Vue.use(Router)

// 登录页
const Login = () => import('@/view/login/Login');
// 后台页
const Index = () => import('@/view/index/Index');
// 主页
const Home = () => import('@/view/home/Home');

// 管理员管理
const User = () => import('@/view/user/User');
// 管理员添加
const UserAdd = () => import('@/view/user/Add');
// 管理员修改
const UserEdit = () => import('@/view/user/Edit');

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
                    path: '/user',
                    name: 'user',
                    component: User
                },
                {
                    path: '/user-add',
                    name: 'user-add',
                    component: UserAdd
                },
                {
                    path: '/user-edit',
                    name: 'user-edit',
                    component: UserEdit
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
    let token = Storage.get('token');

    if (to.fullPath == '/login') {
        return next();
    }

    if (!token) {
        return next({path: '/login'});
    } else {
        next();
    }
});
export default router
