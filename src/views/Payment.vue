<template>
    <div class="payment_page">
        <!-- Payent Desktop -->
        <div class="payment_desktop">
            <div class="title">Отправить</div>
            <WalletList />
            <input type="file" id="select_file" @change="uploadFile" ref="file">
            <label :class="darag_enter ? 'active' : ''" for="select_file" @dragenter="darag_enter = true" @dragleave="darag_enter = false" @dragover="handleDragOver" @drop="handleDrop">
                <img src="@/assets/images/upload_file.svg" alt="">
                <div class="text">
                    <span>Перетащите или выберите файл QR-code</span>
                    Допустимые форматы: png, jpg
                </div>
                <img src="" alt="" class="bg_img" ref="bg_img">
            </label>
            <Button @btnClick="saveFile()" title="Отправить"/>
        </div>

        <!-- Payment Mobile -->
        <div class="payment_mobile">
            <div :class="`head_buttons_bg ${scanner_open ? 'active' : ''}`"></div>
            <div class="head_buttons">
                <span :class="scanner_open ? 'active' : ''"></span>
                <button @click="scanner_open = false" :class="!scanner_open ? 'active' : ''">Ваш QR-code</button>
                <button @click="scanner_open = true" :class="scanner_open ? 'active' : ''">Сканировать</button>
            </div>
            <!-- Your QR-code -->
            <div :class="`your_qr-code ${!scanner_open ? 'active' : ''}`">
                <div class="bg_fon">
                    <img src="@/assets/images/your_qr_code_fon.svg" alt="">
                </div>
                <div class="imgs">
                    <img src="@/assets/images/user_qr_code.png" alt="" class="user_qr_code">
                    <img src="@/assets/images/avatar.svg" alt="" class="user_logotip">
                </div>
                <div class="title">Это ваш  QR-code</div>
                <div class="sub_title">Поделитесь кодом, чтобы получать оплату</div>
                <button class="link">
                    <span>Скачать QR-code</span>
                    <img src="@/assets/images/upload_file_icon.svg" alt="">
                </button>
            </div>

            <!-- Scanner -->
            <div :class="`scanner ${scanner_open ? 'active' : ''}`">
                Hello scanner
            </div>
        </div>
    </div>
</template>

<script>
import WalletList from '@/components/WalletList.vue'
import Button from '@/components/Button.vue'

export default {
    name: "Payment",
    components: {
        WalletList,
        Button,
    },
    data () {
        return {
            darag_enter: false,
            scanner_open: false
        }
    },
    methods: {
        saveFile () {
            console.log('Save file');
        },
        uploadFile (e) {
            if (e.target.files[0]) {
                let linkUrl = URL.createObjectURL(e.target.files[0]);
                this.$refs.bg_img.setAttribute('src', linkUrl);
                this.$refs.bg_img.style.display = 'block';
                console.log(linkUrl);
            }
        },
        handleDragOver (e) {
            e.preventDefault();
            this.darag_enter = true;
        },
        handleDrop (e) {
            e.preventDefault();
            this.$refs.file.files = e.dataTransfer.files;
            let linkUrl = URL.createObjectURL(e.dataTransfer.files[0]);
            this.$refs.bg_img.setAttribute('src', linkUrl);
            this.$refs.bg_img.style.display = 'block';
        },
    }
}
</script>

<style>

</style>