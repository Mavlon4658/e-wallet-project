<template>
    <div class="wallet_save">
        <div class="top">
            <div class="title">Отправить</div>
            <WalletList />
            <div class="input">
                <span>Сумма </span>
                <input type="text" v-model="amount">
            </div>
            <div class="user">
                <img src="@/assets/images/avatar.svg" alt="">
                <div>
                    <div class="name">Phoenix Baker</div>
                    <div class="phone">+7 (963) 214-90-12</div>
                </div>
            </div>
        </div>
        <Button @btnClick="Save()" title="Отправить"/>
        <PayModal @closeModal="closeModal()" v-if="modal_active" />
    </div>
</template>

<script>
import WalletList from '@/components/WalletList.vue'
import Button from '@/components/Button.vue'
import PayModal from '@/components/PayModal.vue'

export default {
    name: "WalletSave",
    components: {
        WalletList,
        Button,
        PayModal,
    },
    data () {
        return {
            amount: '24 000',
            modal_active: false,
        }
    },
    methods: {
        Save () {
            this.modal_active = true;
        },
        closeModal () {
            this.modal_active = false;
        }
    }
}
</script>

<style>

</style>