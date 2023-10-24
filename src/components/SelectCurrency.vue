<template>
    <div class="select_currency">
        <button class="select_currency_button" @click="list_active = !list_active">
            <span>{{currency}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M5.82199 6.81355C5.42431 7.38756 4.57569 7.38756 4.178 6.81355L0.891225 2.06949C0.431745 1.40629 0.9064 0.5 1.71322 0.5L8.28678 0.500001C9.0936 0.500001 9.56825 1.40629 9.10877 2.0695L5.82199 6.81355Z" fill="white"/>
            </svg>
        </button>
        <div v-if="list_active" class="currency_lists">
            <button class="currency_list" @click="selectCurrency(item)" v-for="(item, idx) in currency_list" :key="idx">
                {{item}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SelectCurrency",
    data () {
        return {
            currency: 'Выберете валюту',
            currency_list: [
                'RUB',
                'USD',
                'EUR',
                'IDR'
            ],
            list_active: false,
        }
    },
    methods: {
        selectCurrency (item) {
            this.currency = item;
            this.list_active = false;
        }
    }
}
</script>

<style>

</style>