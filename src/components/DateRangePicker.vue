<template>
    <div class="date_range_picker">
        <button class="time" @click="openDatePicker()">
            <span>{{date_picker.start}} - {{date_picker.end}}</span>
            <img src="@/assets/images/calendar_icon.svg" alt="">
        </button>
        <div class="date_picker_wrapper">
            <DatePicker
                :options="pickerOptions"
                @date-applied="selectData"
            />
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import DatePicker from 'vue-time-date-range-picker'
import "vue-time-date-range-picker/dist/vdprDatePicker.min.css"

export default {
    components: {
        DatePicker,
    },
    data () {
        return {
            date_picker: {
                start: '8 мая',
                end: '12 июня',
            },
            showHelperButtons: true,
        }
    },
    methods: {
        selectData (start, end) {
            const russianMonths = [
                "январь",
                "февраль",
                "март",
                "апрель",
                "май",
                "июнь",
                "июль",
                "август",
                "сентябрь",
                "октябрь",
                "ноябрь",
                "декабрь"
            ];
            this.date_picker.start = +moment(start).format('DD') + ' ' + russianMonths[+moment(start).format('MM') - 1];
            this.date_picker.end = +moment(end).format('DD') + ' ' + russianMonths[+moment(end).format('MM') - 1];
        },
        openDatePicker () {
            $('.vdpr-datepicker input[type="text"]').click();
            $('.date_picker_wrapper').addClass('active')
        }
    },
    mounted () {
        let prev = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M11.625 4.375H0.375" stroke="#051B44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.125 0.625L0.375 4.375L4.125 8.125" stroke="#051B44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
        let next = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M0.375 4.375H11.625" stroke="#051B44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.875 0.625L11.625 4.375L7.875 8.125" stroke="#051B44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
        $('.vdpr-datepicker__calendar-control-prev').append(prev);
        $('.vdpr-datepicker__calendar-control-next').append(next);
        $('.vdpr-datepicker__button-reset').text('Cancel');
        $('.vdpr-datepicker__calendar-table th').each(function (idx, el) {
            $(el).text($(el).text()[0]);
        });

        function sortClass () {
            if ($('.vdpr-datepicker__calendar-table tbody .highlighted').length == 1) {
                $($('.vdpr-datepicker__calendar-table tbody .highlighted')[0]).addClass('highlighted_one');
            } else if ($('.vdpr-datepicker__calendar-table tbody .highlighted').length > 1) {
                $($('.vdpr-datepicker__calendar-table tbody .highlighted')[0]).removeClass('highlighted_one').addClass('highlighted_first');
                $($('.vdpr-datepicker__calendar-table tbody .highlighted')[$('.vdpr-datepicker__calendar-table tbody .highlighted').length - 1]).addClass('highlighted_last');
            }
        }

        $('.vdpr-datepicker__calendar-control-prev').click(() => sortClass())
        $('.vdpr-datepicker__calendar-control-next').click(() => sortClass())
        $('.vdpr-datepicker__calendar-table tbody td').click(() => sortClass())

        $('.date_range_picker .vdpr-datepicker__button-reset').click(function () {
            $('.vdpr-datepicker input[type="text"]').click();
            $('.date_picker_wrapper').removeClass('active')
        })

        $('.date_range_picker .vdpr-datepicker__button-submit').click(function () {
            $('.date_picker_wrapper').removeClass('active')
        })
    }
}
</script>

<style>
</style>
