<template>
    <div class="history">
        <div class="history_head">
            <div class="title">История</div>
            <DateRangePicker />
        </div>
        <WalletList />
        <Payment />
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
    name: "History",
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
            ]
        }
    }
}
</script>

<style>

</style>