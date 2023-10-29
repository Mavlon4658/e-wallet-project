<template>
    <div class="wallet">
        <div v-if="add_account_active" class="add_account_wrapper">
            <div class="add_account">
                <div class="title">Создание счета</div>
                <SelectCurrency />
                <div class="user_data">
                    <div class="user_data_item">
                        <div class="data">E-mail:</div>
                        <div class="value">Dmitrii@mail.ru</div>
                    </div>
                    <div class="user_data_item">
                        <div class="data">Телефон</div>
                        <div class="value">+7 (963) 214-90-12</div>
                    </div>
                    <div class="user_data_item">
                        <div class="data">ID пользователя</div>
                        <div class="value">124123421</div>
                    </div>
                </div>
                <Button @btnClick="saveAccount()" title="+ Добавить счет"/>
            </div>
        </div>
        <div :class="`account_wrapper ${add_account_active ? 'account_wrapper_mobile' : ''}`">
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