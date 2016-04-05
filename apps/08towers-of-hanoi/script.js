'use strict';

$(document).ready(function() {
    //moving the block
    var block = null;
    $("[data-stack]").click(function() {

        if (block !== null) {

            if (isLegal(block, $(this))) {
                $(this).append(block);
                block = null;
            }
        }
        else {
            block = $(this).children().last().detach();
        }

    });
});

function isLegal(block, stack) {
    // console.log(block.attr("data-block"));
    // console.log(stack.children().last().attr("data-block"));
    if (parseInt(block.attr("data-block")) < parseInt((stack.children().last().attr("data-block"))) || stack.children().length == 0) {
        $("#allowed").addClass("fa fa-check-circle");
        return true;
    }
    else {
        $("#not-allowed").text("Move Not Allowed").addClass("fa fa-ban");
        return false;
    }

}

function checkForWin() {

    if ($("[data-stack]").children() == 4 || $("[data-stack]").children() == 4) {
        $("#announce-game-won").text("You Won!");
    }

    else {
        
    }
}


// $('div') //html tag
// $('.class') //class selector
// $('#id') //id selector
// $('[data-block]') //attribute

// .addClass('class')
// .attr('attribute')
