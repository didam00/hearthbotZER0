var cmdFirst = true;

// easter egg
var rndColorNum = 0;
var rndColorLoof;
var feeling = 0
var isSans = false;
var isFrisk = false;

// says
var endToEnd = false;

function cmd() {
    command = $("#realInput").value;
    if(command == "") return false;
    myChat(command)

    if(cmdFirst==true) {
        cmdFirst = false;
        $("#logoDiv").style.top = "calc(100% - 60px)"
        $("#realInput").style.top = "calc(100% - 60px)"
    }
    
    if(command == "프리스크!"&&isSans==true) {
        frisk = document.createElement("img")
        frisk.id = "frisk"
        frisk.src = "http://www.sccpre.cat/png/big/19/194996_undertale-heart-png.png"
        frisk.style.width = "16px"
        frisk.style.position = "absolute"
        frisk.style.left = "5px"
        frisk.style.top = "5px"
        document.body.appendChild(frisk)

        urChat("?")
        isFrisk = true;
        $("html").style.border = "5px white solid"

        frisk.style.transition = "top 100ms, left 100ms"

        // var gb = document.createElement("img")
        // gb.id = "gb"
        // gb.src = "https://cdn140.picsart.com/273971867000211.png?r240x240"
        // gb.style.width = "300px"
        // gb.style.height = "386.96px"
        // gb.style.position = "absolute"
        // gb.style.left = "500px"
        // gb.style.top = "-386.96px"
        // gb.className = "attacks"
        // gb.style.transition = "all 1s"
        // gb.style.transform = "rotate(180deg)"
        // document.body.appendChild(gb)

        // var gbr = document.createElement("div")
        // gbr.id = "gbr"
        // gbr.style.width = "300px"
        // gbr.style.height = "100%"
        // gbr.style.position = "absolute"
        // gbr.style.top = "0px"
        // gbr.style.left = "500px"
        // gbr.style.background = "white"
        // gbr.style.zIndex = "-1"
        // gbr.className = "attacks"
        // gbr.style.transition = "all 500ms"
        // gbr.style.display = "none"
        // document.body.appendChild(gbr)

        // setInterval(function () {
        //     for(i=0; i<$$(".attacks").length; i++) {
        //         if(aabb(frisk, $$(".attacks")[i])) {
        //             friskDie()
        //         }
        //     }
        // },1000/60)
        // setInterval(function () {
        //     gb.style.transform = "rotate(0deg)"
        //     gb.style.top = "-100px"
        //     setTimeout(function () {
        //         gb.style.transform = "rotate(180deg)"
        //         gb.style.top = "-386.96px"
        //         gbr.style.display = "block"
        //         gbr.style.opacity = "1"
        //         setTimeout(function () {
        //             gbr.style.opacity = "0"
        //         },500)
        //     },1000)
        // },3000)
    }

    if(command == "와 샌즈!") {
        var sans = document.createElement("iframe");
        sans.style = "opacity: 0; z-index: -1000;"
        sans.src = "https://www.youtube.com/embed/ZcoqR9Bwx1Y?autoplay=1"
        sans.frameBorder = "0"
        sans.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        sans.allowFullscreen = "true"
        document.body.appendChild(sans);
        sans.id = "sansBgm"
        urChat("샌즈...?")
        setTimeout(function() {

            // background color
            $("#siteColor").outerHTML = ""
            var siteColor = document.head.appendChild(document.createElement("style"))
            siteColor.innerHTML = "* {--siteColor: #000000}"
            siteColor.setAttribute("id","siteColor")
            
            // font
            $("#siteFont").outerHTML = ""
            
            var siteChat = document.head.appendChild(document.createElement("style"))
            siteChat.innerHTML = ".urChats {background: black; color: white; border: 5px white solid;} .myChats {background: black; color: white; border: 5px white solid;}"
        },2500)
        isSans = true
    }

    // 기능
    if(feeling <= -100) {
        switch (Math.floor(Math.random()*5)) {
            case 0 : urChat("뭐"); break;
            case 1 : urChat("어쩌라고"); break;
            case 2 : urChat("그래서?"); break;
            case 3 : urChat("나가"); break;
            case 4 : urChat("F5"); break;
        }
    } else if((command.indexOf("색")!=-1||command.indexOf("배경")!=-1)&&(command.indexOf("바꿔")!=-1||command.indexOf("바꾸")!=-1)) {
        rndColorNum++
        if(rndColorNum==16) {
            switch (Math.floor(Math.random()*5)) {
                case 0 : urChat("얼마나 바꾸는거야"); break;
                case 1 : urChat("그만 바꿔 미친넘아"); break;
                case 2 : urChat("코드 바꾸기 귀찮아"); break;
                case 3 : urChat("그만해"); break;
                case 4 : urChat("그냥 다 해라.."); break;
            }
            feeling -= 10
            rndColorLoof = setInterval(function () {
                var rndColor = Math.floor(Math.random()*360)
                $("#siteColor").outerHTML = ""
                var siteColor = document.head.appendChild(document.createElement("style"))
                siteColor.innerHTML = "* {--siteColor: hsl("+rndColor+", 100%, 55%);}"
                siteColor.setAttribute("id","siteColor")
            },300)
        } else if(rndColorNum>16) {
            switch (Math.floor(Math.random()*3)) {
                case 0 : urChat("아직도 바꾸냐"); break;
                case 1 : urChat("이제 안달라져"); break;
                case 2 : urChat("왜저럴까..."); break;
            }
            feeling -= 3
        } else {
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
    } else if(command.indexOf("이 영어로 뭐야")==command.length-8||command.indexOf("가 영어로 뭐야")==command.length-8) {
        var text = command.substr(0, command.indexOf(" 영어로 뭐야")-1);
        text = text.replace(/과부하/gi,"Overload")
        text = text.replace(/도발/gi,"Taunt")
        text = text.replace(/독성/gi,"Poisonous")
        text = text.replace(/돌진/gi,"Charge")
        text = text.replace(/면역/gi,"Immune")
        text = text.replace(/비밀/gi,"Secret")
        text = text.replace(/빙결/gi,"Freeze")
        text = text.replace(/선택/gi,"Choose One")
        text = text.replace(/연계/gi,"Combo")
        text = text.replace(/은신/gi,"Stealth")
        text = text.replace(/속공/gi,"Rush")
        text = text.replace(/전투의 함성/gi,"Battlecry")
        text = text.replace(/죽음의 메아리/gi,"Deathrattle")
        text = text.replace(/질풍/gi,"Windfury")
        text = text.replace(/차단/gi,"Counter")
        text = text.replace(/천상의 보호막/gi,"Divine Shield")
        text = text.replace(/침묵/gi,"Silence")
        text = text.replace(/하수인/gi,"minion")
        text = text.replace(/영웅/gi,"hero")
        text = text.replace(/캐릭터/gi,"charactor")
        text = text.replace(/아군/gi,"friendly")
        text = text.replace(/뽑을 때 시전/gi,"Casts When Drawn")
        text = text.replace(/생명력 흡수/gi,"Lifesteal")
        text = text.replace(/예비 부품/gi,"Spare Part")
        text = text.replace(/격려/gi,"Inspire")
        text = text.replace(/발견/gi,"Discover")
        text = text.replace(/개전/gi,"Start of Game")
        text = text.replace(/비취 골렘/gi,"Jade Golem")
        text = text.replace(/적응/gi,"Adapt")
        text = text.replace(/퀘스트/gi,"Quest")
        text = text.replace(/보상/gi,"Reward")
        text = text.replace(/소집/gi,"Recruit")
        text = text.replace(/잔상/gi,"Echo")
        text = text.replace(/합체/gi,"Magnetic")
        text = text.replace(/압살/gi,"Overkill")
        text = text.replace(/이중 주문/gi,"Twinspell")
        text = text.replace(/피해를 ([0-9]+) 줍니다/gi,"deal $1 damage")
        text = text.slice(0,1).toUpperCase()+text.slice(1)
        urChat(text)
    } else if(command.indexOf("이 한국어로 뭐야")==command.length-9||command.indexOf("가 한국어로 뭐야")==command.length-9) {
        
        var text = command.substr(0, command.indexOf(" 한국어로 뭐야")-1);
        text = text.replace(/Overload/gi,"과부하")
        text = text.replace(/Taunt/gi,"도발")
        text = text.replace(/Poisonous/gi,"독성")
        text = text.replace(/Charge/gi,"돌진")
        text = text.replace(/Immune/gi,"면역")
        text = text.replace(/Secret/gi,"비밀")
        text = text.replace(/Freeze/gi,"빙결")
        text = text.replace(/Choose One/gi,"선택")
        text = text.replace(/Combo/gi,"연계")
        text = text.replace(/Stealth/gi,"은신")
        text = text.replace(/Rush/gi,"속공")
        text = text.replace(/Battlecry/gi,"전투의 함성")
        text = text.replace(/Deathrattle/gi,"죽음의 메아리")
        text = text.replace(/Windfury/gi,"질풍")
        text = text.replace(/Counter/gi,"차단")
        text = text.replace(/Divine Shield/gi,"천상의 보호막")
        text = text.replace(/Silence/gi,"침묵")
        text = text.replace(/minion/gi,"하수인")
        text = text.replace(/hero/gi,"영웅")
        text = text.replace(/charactor/gi,"캐릭터")
        text = text.replace(/Casts When Drawn/gi,"뽑을 때 시전")
        text = text.replace(/Lifesteal/gi,"생명력 흡수")
        text = text.replace(/Spare Part/gi,"예비 부품")
        text = text.replace(/Inspire/gi,"격려")
        text = text.replace(/Discover/gi,"발견")
        text = text.replace(/Start of Game/gi,"개전")
        text = text.replace(/Jade Golem/gi,"비취 골렘")
        text = text.replace(/Adapt/gi,"적응")
        text = text.replace(/Quest/gi,"퀘스트")
        text = text.replace(/Reward/gi,"보상")
        text = text.replace(/Recruit/gi,"소집")
        text = text.replace(/Echo/gi,"잔상")
        text = text.replace(/Magnetic/gi,"합체")
        text = text.replace(/Overkill/gi,"압살")
        text = text.replace(/Twinspell/gi,"이중 주문")
        text = text.replace(/deal ([0-9]+) damage/gi,"피해를 $1 줍니다")
        
        text = text.slice(0,1).toUpperCase()+text.slice(1)
        urChat(text)
    } else if(command.indexOf("안녕")!=-1||command.indexOf("반가워")!=-1) {
        if(feeling >= 20) {
            switch (Math.floor(Math.random()*5)) {
                case 0 : urChat("하스봇!"); break;
                case 1 : urChat("반가워!!"); break;
                case 2 : urChat("헐, 안녕!"); break;
                case 3 : urChat("인사해줘서 고마워!"); break;
                case 4 : urChat("엉 안녕!"); break;
            }
        } else if(feeling < 20&&feeling >= -10) {
            switch (Math.floor(Math.random()*5)) {
                case 0 : urChat("안녕"); break;
                case 1 : urChat("반가워"); break;
                case 2 : urChat("어서와"); break;
                case 3 : urChat("오랜만이야"); break;
                case 4 : urChat("반갑다"); break;
            }
        } else if(feeling < -10&&feeling >= -50) {
            switch (Math.floor(Math.random()*5)) {
                case 0 : urChat("어"); break;
                case 1 : urChat("응"); break;
                case 2 : urChat("아 안녕."); break;
                case 3 : urChat("아 그래 안녕.."); break;
                case 4 : urChat("안녕."); break;
            }
        } else if(feeling < -50&&feeling > -100) {
            switch (Math.floor(Math.random()*5)) {
                case 0 : urChat("?"); break;
                case 1 : urChat("."); break;
                case 2 : urChat("ㅇ"); break;
                case 3 : urChat("ㅓ"); break;
                case 4 : urChat("-"); break;
            }
        }
    } else if(command.indexOf("공포마")!=-1) {
        urChat("졸라쎈공포마키우기를 하고싶다고?")
        setTimeout(function () {
            myChat("엉");
            urChat("오케이, 내가 연결해줄게!")
            setTimeout(function () {
                window.open("https://didam00.github.io/dread/졸라쎈공포마키우기.html","그 '졸라쎈공포마키우기'")
            },1000)
        },1000)
    } else if(command.indexOf("카드")!=-1&&command.indexOf("이름")!=-1&&(command.indexOf("짓")!=-1||command.indexOf("뭘")!=-1||command.indexOf("뭐")!=-1)) {
        urChat("그럴땐 란듐 사이트로 짓는거 어떨까")
        setTimeout(function () {
            window.open("https://output.jsbin.com/fozabub/26","그 '란듐'")
        },1500)
    }
    $("#realInput").style.opacity = "0"
    setTimeout(function () {
        $("#realInput").value = ""
        $("#realInput").style.opacity = "1"
    },300)
    $("#chats").scrollTop = $("#chats").scrollHeight;
    if(feeling < -100) {
        clearInterval(rndColorLoof)
        $("#siteColor").outerHTML = ""
        var siteColor = document.head.appendChild(document.createElement("style"))
        siteColor.innerHTML = "* {--siteColor: #000000}"
        siteColor.setAttribute("id","siteColor")
    }
}