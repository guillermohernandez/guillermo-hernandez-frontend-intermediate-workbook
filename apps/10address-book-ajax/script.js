'use strict';

$(document).ready(function() {
    //spec 1 AJAX call
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        //spec 2 loop through users
        success: function(users) {
            _.each(users, function(user) {
                //string with id, first, and last name
                var str = "<tr><td>" + user.id + "</td><br><td>" + user.first_name + "</td><br><td>" + user.last_name + "</td><td><a href='#' data-id='0'>view</a></td></tr>"
                //add to table body
                $("tbody").append(str);
            })   
        }
    });
    //spec 3
        $.ajax('https://reqres-api.herokuapp.com/api/users', {
        // loop through users
        success: function(users) {
            _.each(users, function(user) {
                //string with id, first, and last name
                var str = "<h3>first last</h3>"
                //add to table body
                $("tbody").append(str);
            })   
        }
    });
});
