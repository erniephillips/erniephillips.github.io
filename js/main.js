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
    //handle click for side tabs init load
    $("#link_1").click();

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
});