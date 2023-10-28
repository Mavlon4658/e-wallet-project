<template>
    <div class="home">
        <WalletList />
        <Payment />
        <QrPay />
        <Transactions title="Транкзации" />
    </div>
</template>

<script>
import WalletList from "@/components/WalletList.vue"
import Payment from '@/components/Payment.vue'
import QrPay from '@/components/QrPay.vue'
import Transactions from '@/components/Transactions.vue'

export default {
    name: "Home",
    components: {
        WalletList,
        Payment,
        QrPay,
        Transactions,
    }
}
</script>

<style>

</style>