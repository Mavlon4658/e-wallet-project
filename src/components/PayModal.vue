<template>
    <div class="pay_modal_wrapper">
        <div class="modal_bg"></div>
        <div class="pay_modal">
            <!-- Enter pin code -->
            <div v-if="send_stage === 1">
                <h3>Введите пин-код</h3>
                <h4>Для подтверждения перевода введите ваш пин-код</h4>
                <ConfirmationInput v-model:confirm_code="pin_code"/>
            </div>
            <!-- End enter pin code -->

            <!-- Success payment -->
            <div v-if="send_stage === 2">
                <div class="modal_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="108" viewBox="0 0 107 108" fill="none">
                        <path opacity="0.4" d="M76.646 0.665527H30.406C12.326 0.665527 0.166016 13.3589 0.166016 32.2389V75.8122C0.166016 94.6389 12.326 107.332 30.406 107.332H76.646C94.726 107.332 106.833 94.6389 106.833 75.8122V32.2389C106.833 13.3589 94.726 0.665527 76.646 0.665527" fill="#C7FF24"/>
                        <path d="M47.1681 71.3226C45.9734 71.3226 44.7788 70.8692 43.8668 69.9572L31.2108 57.3012C29.3868 55.4772 29.3868 52.5226 31.2108 50.7039C33.0348 48.8799 35.9841 48.8746 37.8081 50.6986L47.1681 60.0586L69.1841 38.0426C71.0081 36.2186 73.9574 36.2186 75.7814 38.0426C77.6054 39.8666 77.6054 42.8212 75.7814 44.6452L50.4694 69.9572C49.5574 70.8692 48.3628 71.3226 47.1681 71.3226" fill="#C7FF24"/>
                    </svg>
                </div>
                <h3>Оплата прошла успешно!</h3>
            </div>
            <!-- End success payment -->

            <!-- Loading payment -->
            <div v-if="send_stage === 3">
                <div class="modal_icon load_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="120" viewBox="0 0 121 120" fill="none">
                        <path d="M120.5 60C120.5 93.1371 93.6371 120 60.5 120C27.3629 120 0.5 93.1371 0.5 60C0.5 26.8629 27.3629 0 60.5 0C93.6371 0 120.5 26.8629 120.5 60ZM18.5 60C18.5 83.196 37.304 102 60.5 102C83.696 102 102.5 83.196 102.5 60C102.5 36.804 83.696 18 60.5 18C37.304 18 18.5 36.804 18.5 60Z" fill="#3B363F"/>
                        <path d="M0.500005 60C0.500006 52.1207 2.05196 44.3185 5.06724 37.039C8.08252 29.7595 12.5021 23.1451 18.0736 17.5736C23.6451 12.0021 30.2595 7.5825 37.539 4.56722C44.8185 1.55194 52.6207 -5.9342e-06 60.5 -5.24537e-06L60.5 18C54.9845 18 49.523 19.0864 44.4273 21.1971C39.3316 23.3077 34.7016 26.4014 30.8015 30.3015C26.9015 34.2016 23.8078 38.8316 21.6971 43.9273C19.5864 49.023 18.5 54.4845 18.5 60L0.500005 60Z" fill="#C7FF24"/>
                    </svg>
                </div>
                <h3>Ожидание оплаты</h3>
                <h4>Не закрывайте страницу</h4>
            </div>
            <!-- End loading payment -->

            <!-- Faild payment -->
            <div v-if="send_stage === 4">
                <div class="modal_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="108" viewBox="0 0 107 108" fill="none">
                        <path opacity="0.4" d="M76.647 0.666504H30.407C12.327 0.666504 0.166992 13.3598 0.166992 32.2398V75.8132C0.166992 94.6398 12.327 107.333 30.407 107.333H76.647C94.727 107.333 106.834 94.6398 106.834 75.8132V32.2398C106.834 13.3598 94.727 0.666504 76.647 0.666504Z" fill="#F34B47"/>
                        <path d="M69.5844 63.4427L60.0964 53.96L69.5791 44.4773C71.4031 42.6587 71.4031 39.6987 69.5791 37.88C67.7551 36.0453 64.8057 36.0507 62.9817 37.8747L53.4937 47.3573L44.0057 37.864C42.1817 36.04 39.2271 36.0507 37.4031 37.864C35.5844 39.688 35.5844 42.648 37.4031 44.4667L46.8964 53.96L37.4244 63.4267C35.6004 65.2507 35.6004 68.2107 37.4244 70.024C38.3364 70.9413 39.5257 71.3947 40.7204 71.3947C41.9204 71.3947 43.1097 70.9413 44.0217 70.0293L53.4937 60.5573L62.9871 70.0453C63.8991 70.9573 65.0884 71.4107 66.2831 71.4107C67.4777 71.4107 68.6724 70.952 69.5844 70.0453C71.4084 68.2213 71.4084 65.2667 69.5844 63.4427Z" fill="#F34B47"/>
                    </svg>
                </div>
                <h3>Оплата не прошла</h3>
                <h4>Повторите попытку позже</h4>
            </div>
            <!-- End faild payment -->

            <div v-if="send_stage !== 1" class="modal_main">
                <div class="modal_block">
                    <p>Сумма:</p>
                    <h4>$24,000</h4>
                </div>
                <div class="modal_block">
                    <p>Получатель:</p>
                    <h5>Иванов Иван</h5>
                </div>
                <div class="modal_block">
                    <p>Дата транказции:</p>
                    <h5>24.05.2023 в 18:00</h5>
                </div>
                <div class="modal_block">
                    <p>ID транзакции:</p>
                    <h5>123214Af12</h5>
                </div>
            </div>
            <Button :disabled="pin_code.length < 4" @btnClick="sendPayment" :title="button_text"/>
        </div>    
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import ConfirmationInput from './ConfirmationInput.vue'

export default {
    name: "PayModal",
    components: {
        Button,
        ConfirmationInput
    },
    data () {
        return {
            send_stage: 1,
            pin_code: '',
            button_text: 'Отправить'
        }
    },
    methods: {
        sendPayment () {
            if (this.send_stage === 4) {
                this.$emit('closeModal');
            }

            if (this.send_stage === 3) {
                this.send_stage = 4;
            }

            if (this.send_stage === 2) {
                this.send_stage = 3;
            }

            if (this.send_stage === 1) {
                this.send_stage = 2;
                this.button_text = 'Закрыть окно';
            };
        }
    }
}
</script>

<style>

</style>