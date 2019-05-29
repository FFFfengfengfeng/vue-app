import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 登录页
const Login = () => import('@/view/login/Login');
// 主页
const Index = () => import('@/view/index/Index');
// 分类管理
const Classify = () => import('@/view/classify/Classify');
// 商品管理
const Goods = () => import('@/view/goods/Goods');

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: [
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
})
