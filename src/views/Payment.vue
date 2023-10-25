<template>
    <div class="payment_page">
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
            darag_enter: false
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