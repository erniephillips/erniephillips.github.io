/*
;===========================================================================================================================================
; Title:  main.js
; Author: Ernie Phillips
; Date:   13 Aug 2019
; Modified By: Ernie Phillips
; Description: basic Javascript file for maintaining application
;===========================================================================================================================================
*/
$(function () {
    //handle all DOM elements in Animate on Selection JS class 
    AOS.init();

    //handle click for side tabs init load
    $("#link_1").click();

    //handle scroll
    $('#btnAboutMe').on('click', function (e) {
        e.preventDefault(); //prevent event propagation
        var target = $("#aboutMe");//grab intended target
        $('html, body').stop().animate({//jQuery animation
            scrollTop: target.offset().top //grab screen position then set with a 2 second delay
        }, 2000);
    });

    //handle social media icons hover
    $("#facebook_icon").hover(function () {
        this.src = "./images/facebook_lightblue.png";
    }, function () {
        this.src = "./images/facebook_blue.png";
    });
    $("#github_icon").hover(function () {
        this.src = "./images/github_lightblue.png";
    }, function () {
        this.src = "./images/github_blue.png";
    });
    $("#linkedin_icon").hover(function () {
        this.src = "./images/linkedin_lightblue.png";
    }, function () {
        this.src = "./images/linkedin_blue.png";
    });
    $("#android_icon").hover(function () {
        this.src = "./images/android_lightblue.png";
    }, function () {
        this.src = "./images/android_blue.png";
    });

    $(".modal-click").click(function () {
        var url = this.src;
        var filename = url.substring(url.lastIndexOf('/') + 1);

        $(".modal-title").text(filename)
        $("#imgMain").attr('src', url);
    });
});

