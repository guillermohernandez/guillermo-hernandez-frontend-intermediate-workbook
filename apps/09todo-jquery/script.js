'use strict';

$(document).ready(function() {
    //submit event
    $('form').submit(function(event) {
        //prevent default
        event.preventDefault();
        //capture input text, store in var
        var todoText = $(this).find('input[type="text"]').val();
        console.log(todoText);
        //clear after submit
        $(this).find('input[type="text"]').val('');
        //add to list

        $("#todo-list").append("<li>" + '<input type ="checkbox">' + "<label>" + todoText + "</label>" + "<button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + "</li>");
        $("#todo-list").sortable();
    });

    $("#todo-list").on('click', 'button', function() {
        //show list item clicked
        $(this).parent().remove();
    });
});
