import "jquery";
import "popper.js";
import "bootstrap";
import "./x-flatpickr";
import $ from "jquery";
import "./switch-btn";
import "jquery-ui/ui/widgets/autocomplete";

$("#form_id").submit(function (event) {
    console.log("start : " + event.start);
    console.log("end : " + event.end);
    event.preventDefault();
});

