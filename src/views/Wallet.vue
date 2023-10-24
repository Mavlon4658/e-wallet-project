<template>
    <div class="wallet">
        <div v-if="add_account_active" class="add_account_wrapper">
            <div class="add_account">
                <div class="title">Создание счета</div>
                <SelectCurrency />
                <Button @btnClick="saveAccount()" title="+ Добавить счет"/>
            </div>
        </div>
        <div class="account_wrapper">
            <div class="accounts">
                <div class="account" v-for="(item, idx) in accounts" :key="idx">
                    <div class="currency">{{item.currency}}</div>
                    <div class="amount">{{item.amount}}</div>
                    <img src="@/assets/images/accounts_fon.svg">
                </div>
            </div>
        </div>
        <Button v-if="!add_account_active" @btnClick="addNewAccount()" title="+ Добавить новый счет"/>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import SelectCurrency from '@/components/SelectCurrency.vue'

export default {
    name: "Wallet",
    components: {
        Button,
        SelectCurrency
    },
    data () {
        return {
            accounts: [
                {currency: 'RUB', amount: '₽ 21,860.02'},
                {currency: 'USD', amount: '$ 21,860.02'},
                {currency: 'EUR', amount: '€ 18,250.45'},
                {currency: 'IDR', amount: 'Rp 250,124,124.754'},
            ],
            add_account_active: false,
        }
    },
    methods: {
        addNewAccount () {
            this.add_account_active = true;
        },
        saveAccount () {
            this.$router.push({name: "WalletSave"})
        }
    }
}
</script>

<style>

</style>