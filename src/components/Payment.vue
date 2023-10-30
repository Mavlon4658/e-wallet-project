<template>
    <div class="payment">
        <button @click="$router.push({name: 'WalletSave'})">
            <img src="@/assets/images/money-send.svg" alt="">
            <span>Отправить</span>
        </button>
        <button>
            <img src="@/assets/images/money-send_2.svg" alt="">
            <span>Поплнить</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "Payment"
}
</script>

<style>

</style>