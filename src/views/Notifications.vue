<template>
    <div class="notifictaion_list">
        <div class="notification_head">Уведомления</div>

        <div class="notifictaion_content_wrappert">
        <div class="notification_content">
            <div class="notifictaion_item" v-for="(item, idx) in 10" :key="idx">
            <div class="top">Сегодня</div>
            <div class="bottom">
                <img src="@/assets/images/avatar.svg" alt="">
                <div class="right">
                <div class="right_title">
                    <div class="title">Вы получили перевод</div>
                    <div class="time">12:00</div>
                </div>
                <right class="content">
                    Дмитрий Т. отправил вам <span>$320</span> на ваш кошелек
                </right>
                </div>
            </div>
            </div>
        </div>
        </div>

        <button @click="notification_open = false" class="notification_foot">
        <span>Закрыть</span> 
        <img src="@/assets/images/close.svg" alt="">
        </button>
    </div>
</template>

<script>
export default {
    name: "Notifications"
}
</script>

<style>

</style>