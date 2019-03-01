function $(a) {return document.querySelector(a);}
function $$(a) {return document.querySelectorAll(a);}
function longshadow(object, theLength, color) {
    var ls = "";
    for(i=0; i<theLength+1; i++) {
        ls += `,${i}px ${i}px 0px ${color}`
    }
    ls = ls.replace(",","")
    object.style.boxShadow = ls;
}
var timer = 0;
var aniTiming;
window.onload = function () {aniTiming = setInterval(function () {timer++; if(timer==1000) {timer = 0;}},1)}
var isPhone;
var filterPhone = "win16|win32|win64|mac";
if (navigator.platform) {if (filterPhone.indexOf(navigator.platform.toLowerCase()) < 0) {isPhone = true;} else {isPhone = false;}}
var start = false;
document.onclick = function () {
    if(start == false) {
        start = true;
        clearInterval(aniTiming)
        setTimeout(function () {
            $("#logoDiv :nth-child(1)").style.animationName = "none"
            $("#logoDiv :nth-child(2)").style.animationName = "none"
            $("#logoDiv :nth-child(3)").style.animationName = "none"
            
            $("#logoDiv").style.width = "16px"
            $("#logoDiv").style.height = "16px"
            $("#logoDiv :nth-child(1)").style.height = "70px"
            $("#logoDiv :nth-child(1)").style.width = "16px"
            $("#logoDiv :nth-child(1)").style.top = "0px"
            $("#logoDiv :nth-child(1)").style.left = "0px"
            $("#logoDiv :nth-child(2)").style.height = "70px"
            $("#logoDiv :nth-child(2)").style.width = "16px"
            $("#logoDiv :nth-child(2)").style.top = "0px"
            $("#logoDiv :nth-child(2)").style.left = "0px"
            $("#logoDiv :nth-child(3)").style.height = "70px"
            $("#logoDiv :nth-child(3)").style.width = "16px"
            $("#logoDiv :nth-child(3)").style.top = "0px"
            $("#logoDiv :nth-child(3)").style.left = "0px"
            $("#logoDiv :nth-child(3)").style.background = "white"
            $("#logoDiv :nth-child(3)").style.zIndex = "-1"
            setTimeout(function () {
                $("#logoDiv").style.height = "70px"
                $("#logoDiv").style.width = "calc(100% - 110px)"
                $("#logoDiv :nth-child(1)").style.display = "none"
                $("#logoDiv :nth-child(3)").style.display = "none"
                $("#logoDiv :nth-child(2)").style.width = "calc(100% - 20px)"
                $("#logoDiv :nth-child(2)").style.height = "100%"
            },400)
        },timer)
    }
}