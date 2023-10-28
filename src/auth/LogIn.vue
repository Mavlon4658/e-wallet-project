<template>
    <div class="log_in">
        <div :class="`log_in_wrapper log_in_wrapper_media ${$store.state.send_confirm_code ? 'd-none' : ''}`">
            <div>
                <router-link class="mobile_link" :to="{name: 'Register'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="#C7FF24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Регистрация</span>
                </router-link>
                <div class="title">Вход в личный кабинет</div>
                <input-mask v-model:phone="phone" />
                <div class="text">Вы получите SMS-сообщение с кодом подтверждения для входа в личный кабинет</div>
            </div>
            <Button @btnClick="sendData" title="Отправить код"/>
        </div>

        <!-- Identifiction -->
        <div :class="`identifiction ${!$store.state.send_confirm_code ? 'd-none' : ''}`">
            <AuthIdentification 
                v-model:confirm_code="confirm_code" 
                :phone="phone" 
                @onPrevPage="changeToPrevPage"
                title="Введите код из сообщения" 
                description="Введите 4-значный код, который мы выслали по номеру"
            />
            <Button @btnClick="checkConfirmCode" :disabled="confirm_code.length < 4" title="Войти"/>
            <send-again-button title="Отправить еще раз"/>
        </div>
        <!-- End identifiction -->
    </div>
</template>

<script>
import InputMask from '@/components/phone_input/InputMask.vue'
import Button from '@/components/Button.vue'
import ConfirmationInput from '@/components/ConfirmationInput.vue'
import AuthIdentification from '@/components/AuthIdentification.vue'
import SendAgainButton from '@/components/SendAgainButton.vue'

export default {
    name: "LogIn",
    components: {
        InputMask,
        Button,
        ConfirmationInput,
        AuthIdentification,
        SendAgainButton
    },
    data () {
        return {
            phone: '',
            confirm_code: '',
        }
    },
    methods: {
        sendData() {
            this.$store.commit('ConfirmCode');
        },
        checkConfirmCode () {},
        changeToPrevPage () {
            this.$store.commit('ConfirmCode')
        },
    }
}
</script>

<style>

</style>