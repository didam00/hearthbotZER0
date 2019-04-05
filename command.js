var cmdFirst = true;

function cmd() {
    myChat(command)
    if(cmdFirst==true) {
        cmdFirst = false;
        $("#logoDiv").style.top = "calc(100% - 60px)"
        $("#realInput").style.top = "calc(100% - 60px)"
    }
    if((command.indexOf("색")!=-1||command.indexOf("배경")!=-1)&&(command.indexOf("바꿔")!=-1||command.indexOf("바꾸")!=-1)) {
        var rndColor = Math.floor(Math.random()*360)
        $("#siteColor").outerHTML = ""
        var siteColor = document.head.appendChild(document.createElement("style"))
        siteColor.innerHTML = "* {--siteColor: hsl("+rndColor+", 100%, 55%);}"
        siteColor.setAttribute("id","siteColor")
        switch (Math.floor(Math.random()*5)) {
            case 0 : urChat("좀 더 이쁜 색으로 바꿔봤어!"); break;
            case 1 : urChat("이런 색은 어때?"); break;
            case 2 : urChat("이 색도 이쁠거같아"); break;
            case 3 : urChat("난 이 색이 좋아"); break;
            case 4 : urChat("이건 별론가?"); break;
        }
    }
    $("#realInput").style.opacity = "0"
    setTimeout(function () {
        $("#realInput").innerHTML = ""
        $("#realInput").style.opacity = "1"
    },300)
    $("#chats").scrollTop = $("#chats").scrollHeight;
}