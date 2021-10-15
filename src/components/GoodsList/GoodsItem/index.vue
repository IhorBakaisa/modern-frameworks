<template>
    <div class="goods">
        <div>{{goods.name}} | {{goods.unitMeasurement}} | {{goods.number}}</div>
    </div>
</template>

<script>
    export default {
        name: 'GoodsItem',
        props: {
            goods: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="css" scoped>
.goods {
    width: 400px;
    border: 2px solid black;
    margin: 3px;
    border-radius: 4px;
}
</style>