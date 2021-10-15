import GoodsList from "@/components/GoodsList"
import AddGoods from "@/pages/AddGoods"
import RemoveGoods from "@/pages/RemoveGoods"
import VueRouter from "vue-router"

const routes = [
    {path: '/', component: GoodsList},
    {path: '/addGoods', component: AddGoods},
    {path: '/removeGoods', component: RemoveGoods}
]

const router = new VueRouter({routes})

export default router