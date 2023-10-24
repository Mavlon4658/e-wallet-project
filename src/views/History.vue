<template>
    <div class="history">
        <div class="history_head">
            <div class="title">История</div>
            <div class="time">
                8 мая - 12 июня
                <img src="@/assets/images/calendar_icon.svg" alt="">
            </div>
            <DateRangePicker />
        </div>
        <WalletList />
        <Payment />
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
}
</script>

<style>

</style>