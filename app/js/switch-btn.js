import $ from 'jquery';
import Switch from "./Switch";

const html1 = "<div class='d1 ui-widget col-sm-12 mb-4'>" +



    "<label class='sr-only' for='klant'>Klant</label>" +
    "<div class='input-group'>" +
    "<div class='input-group-prepend w-25'>" +
    "<div class='input-group-text w-100'>Klant</div>" +
    "</div >" +
    "<div class='w-75'>" +
    "<input id='project' class='form-control' type='text'>" +
    "</div>" +
    "</div>";

const switchbtn = new Switch([
    {
        "classSelector": "d1",
        "beforeClass": "d2",
        "html": html1,
    }
]);

$(function () {

    switchbtn.initialize("Blokken", "Klant");
    $(".switch-btn").on("click", () => {
        switchbtn.switch();

        $("#project").autocomplete({
            minLength: 3,
            source: function (request, response) {
                $.ajax({
                    url: "https://jsonplaceholder.typicode.com/users",
                    dataType: "jsonp",
                    data: {
                        term: request.term
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            appendTo: "#form_id",
            autoFocus: true,
            delay: 10,

            select: function (event, ui) {
                $("#project").val(ui.item.name);
                $("#project-id").val(ui.item.id);
                return false;
            }
        })
            .autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<div>" + item.name + "<br>" + item.email + "<br>" + item.company.name + "</div>")
                    .appendTo(ul);
            };
    });
})