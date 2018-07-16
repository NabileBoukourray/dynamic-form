import flatpickr from "flatpickr";
import { Dutch } from "flatpickr/dist/l10n/nl.js";
import $ from "jquery";

flatpickr(".flatpickr.js-flatpickr-datetime", {
    "locale": Dutch,
    enableTime: true,
    time_24hr: true,
    altInput: true,
    altFormat: "d M Y H:i",
    dateFormat: "Y-m-d H:i",
});

flatpickr(".flatpickr.js-flatpickr-time", {
    "locale": Dutch,
    enableTime: true,
    time_24hr: true,
    altInput: true,
    altFormat: "H:i",
    dateFormat: "H:i",
    noCalendar: true,
    static: true,
});

flatpickr(".flatpickr.js-flatpickr-date", {
    "locale": Dutch,
    enableTime: false,
    altInput: true,
    altFormat: "d M Y",
    dateFormat: "Y-m-d H:i",
});











/*
let start = null;
let end = null;

flatpickr("#start_id", {
    "locale": Dutch,
    static: true,
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    //enableSeconds: true,
    time_24hr: true,
    minDate: "8:00",
    maxDate: "20:00",

    onChange: function (selectedDates, dateStr, instance) {
        start = dateStr;
    },

});

flatpickr("#end_id", {
    "locale": Dutch,
    static: true,
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    //enableSeconds: true,
    time_24hr: true,
    minDate: "8:00",
    maxDate: "20:00",

    onChange: function (selectedDates, dateStr, instance) {
        end = dateStr;
    },
});*/


