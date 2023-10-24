<template>
    <div>
        <h1> {{dateRange}} </h1>
        <DatePicker
            v-model="dateRange"
            :showStartDate="true"
            :showEndDate="true"
            :showHelperButtons="showHelperButtons"
            :helperButtons="helperButtons"
            @date-applied="selectData"
        />
        <p>Start Date: {{ startDate }}</p>
        <p>End Date: {{ endDate }}</p>
    </div>
</template>

<script>
import DatePicker from 'vue-time-date-range-picker'
import "vue-time-date-range-picker/dist/vdprDatePicker.min.css"

export default {
    components: {
        DatePicker,
    },
    data () {
        return {
        dateRange: null,
        startDate: null,
        endDate: null,
        dateInput: {
            placeholder: "Select Date",
        },
        showHelperButtons: true,
        helperButtons: [
            {
                name: "Last 7 days",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 02 23:59"),
            },
            {
                name: "Last 14 days",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 03 15:00"),
            },
            {
                name: "Last 30 days",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 15 00:00"),
            },
            {
                name: "Last 3 months",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 15 00:00"),
            },
            {
                name: "Last 12 months",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 15 00:00"),
            },
            {
                name: "Select Time",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 15 00:00"),
            },
            {
                name: "Custom",
                from: new Date("2021 09 01 00:00"),
                to: new Date("2021 09 15 00:00"),
            },
        ],
        }
    },
    methods: {
        selectData (start, end) {
            console.log(start, end);
        }
    }
}
</script>

<style>
</style>
