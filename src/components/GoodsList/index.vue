<template>
    <div class="goodList">
        <goods-item v-for="goods in getGoodsList" :key="goods.id"
            :goods="goods"
        />
    </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
import { mapGetters } from "vuex"
    export default {
        name: 'GoodsList',
        components: {
            GoodsItem
        },
        computed: {
            ...mapGetters(['getGoodsList'])
        },
    }
</script>

<style lang="css" scoped>
.goodList {
    margin-left: 550px;
}
</style>