<template>
    <div id="QRPay">
        <div class="qrpay_text">
            <h3>Платите с помощью QR-code</h3>
            <p>Теперь вы можете переводить средства просто наведя камеру на QR-code</p>
        </div>
        <div class="qrpay_img">
            <div class="qrpay_bg">
                <div class="prpay_bg_in"></div>
                <div class="main_images">
                    <img class="main_img" src="@/assets/images/qr_pay_qr.png" alt="">
                    <img class="avatar_icon" src="@/assets/images/avatar.svg" alt="">
                </div>
                <img class="hand_img" src="@/assets/images/hand_money.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: "QrPay"
})
</script>
