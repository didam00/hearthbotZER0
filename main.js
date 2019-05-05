function longshadow(object, theLength, color) {
    var ls = "";
    for(i=0; i<theLength+1; i++) {
        ls += `,${i}px ${i}px 0px ${color}`
    }
    ls = ls.replace(",","")
    object.style.boxShadow = ls;
}

var sansGame;
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
            $("#logoDiv :nth-child(1)").style.animationName = "byeLogo1"
            $("#logoDiv :nth-child(1)").style.animationDuration = "200ms"
            $("#logoDiv :nth-child(2)").style.animationName = "none"
            $("#logoDiv :nth-child(3)").style.animationName = "null"
            $("#logoDiv :nth-child(3)").style.animationDuration = "200ms"
            $("#logoDiv :nth-child(3)").style.animationFillMode = "forwards"
            $("#logoDiv :nth-child(3)").style.animationIterationCount = "1"
            if(isPhone) {
                $("#realInput").style.width = "calc(100% - 190px)"
                $("#logoDiv").style.width = "calc(100% - 40px)"
            } else {
                $("#logoDiv").style.width = "calc(100% - 100px)"
            }
            $("#logoDiv :nth-child(2)").style.width = "calc(100% - 20px)"
            $("#logoDiv :nth-child(3)").style.right = "65px"
            $("#logoDiv :nth-child(2)").style.height = "100%"
            setTimeout(function () {
                $("#logoDiv").style.height = "60px"
                $("#logoDiv :nth-child(1)").style.display = "none"
                $("#logoDiv :nth-child(2)").setAttribute("id","input")
                $("#realInput").setAttribute("contenteditable","true")
                $("#realInput").style.display = "block"
                $("#realInput").style.zIndex = "101"
                $("#logoDiv :nth-child(3)").setAttribute("id","sendButton")
                $("#logoDiv :nth-child(3)").style.right = "30px"
                $("#sendButton").style.width = "75px"
                $("#logoDiv :nth-child(3)").style.height = "40px"
                $("#sendButton").onmouseover = function () {$("#sendButton").style.width = "90px"}
                $("#sendButton").onmouseout = function () {$("#sendButton").style.width = "75px"}
                $("#sendButton").onclick = function () {
                    fakeCmd()
                }
                setInterval(function () {
                    if($("#realInput"))
                    liveCommand = $("#realInput").value;
                },1)
            },200)
        },timer)
    }
}

// easter Egg

window.onkeydown = function () {
    if(event.keyCode == 37) {
        frisk.style.left = Number(frisk.style.left.replace("px","")) - 7 +"px"
        if(Number(frisk.style.left.replace("px","")) <= 12) {
            frisk.style.left = "2.5px"
        }
    }
    if(event.keyCode == 38) {
        frisk.style.top = Number(frisk.style.top.replace("px","")) - 7 +"px"
        if(Number(frisk.style.top.replace("px","")) <= 12) {
            frisk.style.top = "2.5px"
        }
    }
    if(event.keyCode == 39) {
        frisk.style.left = Number(frisk.style.left.replace("px","")) + 7 +"px"
        if(Number(frisk.style.left.replace("px","")) >= window.innerWidth - 21) {
            frisk.style.left = window.innerWidth - 26 + "px"
        }
    }
    if(event.keyCode == 40) {
        frisk.style.top = Number(frisk.style.top.replace("px","")) + 7 +"px"
        if(Number(frisk.style.top.replace("px","")) >= window.innerHeight - 21) {
            frisk.style.top = window.innerHeight - 26 + "px"
        }
    }
}