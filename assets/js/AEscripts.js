// Amplitude Envelope Demo
// Small audio/visual demo of Amplitude Envelopes
// MAPLE Lab, McMaster
//
//
// Written by Kyle Gauder
// Git Repo: https://github.com/gauderkd/AmpEnvelopeDemo
//
///////////////////////////////////////////////////////
//
function play(audioID) {


    var piece = document.getElementById(audioID); //puts clicked into piece

    if (piece.paused == false) { //if it's already playing,
        piece.pause(); //pause audio
        piece.currentTime = 0; //set time to 0
    } else {
        $.each($('.audio'), function () { //go through and pause ALL audio
            var indpiece = this;
            indpiece.pause();
            indpiece.currentTime = 0;
        });
        piece.volume = 0.5;
        piece.play(); //play selected audio
    }
}

var menuControl = function () {
    $(".audio").bind("ended", function () {
        $('.pauseDisplay').show();
        $('.playDisplay').hide();
        $('.button').removeClass('playing');
        $('.button').animate({
            opacity: 0.7
        }, {
            queue: false
        }, 300);
    });
    $('.button').click(function () {
        if ($(this).hasClass('playing')) {
            $('.pauseDisplay').show();
            $('.playDisplay').hide();
            $('.button').removeClass('playing');
            $('.button').animate({
                opacity: 0.7
            }, {
                queue: false
            }, 300);
        } else {
            $('.pauseDisplay').hide();
            $('.playDisplay').show();
            $('.button').removeClass('playing');
            $(this).addClass('playing');
            $('.button').animate({
                opacity: 0.4
            }, {
                queue: false
            }, 300);
            $(this).animate({
                opacity: 1
            }, {
                queue: false
            }, 100);
        }
    });
    $('.perc').click(function () {
        $('.descript,.descript2').hide();
        $('.perc').show();
    });
    $('.flat').click(function () {
        $('.descript,.descript2').hide();
        $('.flat').show();
    });
    $('.rev').click(function () {
        $('.descript,.descript2').hide();
        $('.rev').show();
    });
}

$(document).ready(menuControl);