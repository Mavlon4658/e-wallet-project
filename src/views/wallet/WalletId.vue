<template>
    <div class="account_wallet">
        <div :class="`account_wrapper ${add_account_active ? 'account_wrapper_mobile' : ''}`">
            <div class="accounts">
                <div class="account" v-for="(item, idx) in accounts" :key="idx">
                    <div class="currency">{{item.currency}}</div>
                    <div class="amount">{{item.amount}}</div>
                    <img src="@/assets/images/accounts_fon_two.svg">
                </div>
            </div>
        </div>
    </div>
    <Payment />
    <div class="account_details">
        <h3>Данные счета</h3>
        <div class="account_detail_block block_top">
            <p>E-mail:</p>
            <h6>Dmitrii@mail.ru</h6>
        </div>
        <div class="account_detail_block">
            <p>Телефон</p>
            <h6>+7 (963) 214-90-12</h6>
        </div>
    </div>
    <div class="walletId">
        <div class="history_head">
            <div class="title">История</div>
            <DateRangePicker />
        </div>
        <div class="statistics">
            <img class="statistics_img" src="@/assets/images/history_degree.png" alt="">
            <img class="statistics_img statistics_img_mobile" src="@/assets/images/history_degree_mobile.png" alt="">
        </div>
        <div class="statistics_list">
            <div v-for="(item, idx) in statistics_list" :key="idx" :class="`statistics_item ${item.class}`">
                <div>
                    <div class="amount">{{item.amount}}</div>
                    <div class="contition">{{item.condition}}</div>
                </div>
                <div class="protsent">{{item.protsent}}</div>
            </div>
        </div>
        <div class="main_line"></div>
        <Transactions />
    </div>
</template>

<script>
import WalletList from "@/components/WalletList.vue"
import Payment from '@/components/Payment.vue'
import Transactions from '@/components/Transactions.vue'
import DateRangePicker from '@/components/DateRangePicker.vue'

export default {
    name: "WalletId",
    components: {
        WalletList,
        Payment,
        Transactions,
        DateRangePicker
    },
    data () {
        return {
            statistics_list: [
                {amount: '$159.45', condition: 'Пополнения', protsent: '62%', class: 'green'},
                {amount: '$74.62', condition: 'Выводы', protsent: '12%', class: 'red'},
                {amount: '$29.32', condition: 'Платежи', protsent: '20%', class: 'yellow'},
                {amount: '$5.00', condition: 'Прочее', protsent: '6%', class: 'blue'},
            ],
            accounts: [
                {currency: 'RUB', amount: '₽ 21,860.02'},
            ],
            add_account_active: false,
        }
    }
}
</script>

<style>

</style>