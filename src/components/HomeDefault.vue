<template>
    <div class="main_app">   
        <Header />
        <div class="main_container main_app_container">
            <div class="main_app_item main_app_left">
                <router-view></router-view>
            </div>
            <div class="main_app_item main_app_right">
                <Settings />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Settings from '@/views/Settings.vue'

export default {
    name: "HomeDefault",
    components: {
        Header,
        Settings,
    }
}
</script>

<style>

</style>