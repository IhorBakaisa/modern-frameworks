<template>
    <div>
        <h2>Дадати товар</h2>
        <div>
            <label>
                Назва товару
                <input type="text" v-model="name">
            </label>
            <br>
            <br>
            <label>
                Одиниця виміру
                <input type="text" v-model="unitMeasurement">
            </label>
            <br>
            <br>
            <label>
                Кількість
                <input type="text" v-model.number="number">
            </label>
        </div>
        <br>
        <button @click="addgoods">Додати товар</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'AddGoods',
        data() {
            return {
                name: null,
                unitMeasurement: null,
                number: null
            }
        },
        methods: {
            ...mapActions(['addGoods']),
            addgoods() {
                this.addGoods({
                    name: this.name,
                    unitMeasurement: this.unitMeasurement,
                    number: this.number
                })
                this.$router.push({ path: '/' })
            }
        },
    }
</script>

<style lang="css" scoped>
button,label {
    font-family: sans-serif;
    background: black;
    color: white;
    padding: 10px;
}
</style>