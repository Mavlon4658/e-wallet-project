<template>
    <div class="payment_page">
        <div class="title">Отправить</div>
        <WalletList />
    </div>
</template>

<script>
import WalletList from '@/components/WalletList.vue'
export default {
    name: "Payment",
    components: {
        WalletList,
    }
}
</script>

<style>

</style>