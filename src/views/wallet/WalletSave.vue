<template>
    <div class="wallet_save">
        <div class="top">
            <div class="title">Отправить</div>
            <WalletList />
            <div class="input">
                <span>Сумма </span>
                <input
                    v-model="maskedValue"
                    v-maska="bindedObject"
                    data-maska="9 99#"
                    data-maska-tokens="9:[0-9]:repeated"
                    data-maska-reversed
                    pattern="[0-9]*"
                    inputmode="numeric"
                >
            </div>
            <div class="user" @click="openUserSelect()">
                <img src="@/assets/images/avatar.svg" alt="">
                <div>
                    <div class="name">Phoenix Baker</div>
                    <div class="phone">+7 (963) 214-90-12</div>
                </div>
            </div>
        </div>
        <div v-if="open_select_user" class="search" ref="box">
            <div class="search_input">
                <img src="@/assets/images/search_icon.svg" alt="" class="icon">
                <input type="text" value="+7 (963) 214-90-12">
            </div>
            <div class="search_result">
                <button v-for="i in 10" :key="i" :class="i == select_user ? 'active' : ''" @click="selectUser(i)">
                    <img src="@/assets/images/avatar.svg" alt="">
                    <div class="user_data">
                        <div class="name">Phoenix Baker</div>
                        <div class="phone">+7 (963) 214-90-12</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M16.6668 5.5L7.50016 14.6667L3.3335 10.5" stroke="#C7FF24" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
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
import { vMaska } from "maska";

export default {
    name: "WalletSave",
    directives: { maska: vMaska },
    components: {
        WalletList,
        Button,
        PayModal,
    },
    data () {
        return {
            maskedValue: '1200000000',
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
            modal_active: false,
            select_user: 2,
            open_select_user: false,
            other_click: false,
        }
    },
    mounted () {
        document.addEventListener('click', this.handleClickOutsideBox);
    },
    methods: {
        Save () {
            this.modal_active = true;
        },
        closeModal () {
            this.modal_active = false;
        },
        openUserSelect () {
            this.open_select_user = true;
            this.other_click = false;
        },
        selectUser (idx) {
            this.select_user = idx;
            this.open_select_user = false;
        },
        handleClickOutsideBox(event) {
            const box = this.$refs.box;
            if (box && !box.contains(event.target) && this.open_select_user) {
                if (this.other_click) {
                    this.open_select_user = false;
                }
                this.other_click = true;
            }
        }
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutsideBox);
    }

}
</script>

<style>

</style>