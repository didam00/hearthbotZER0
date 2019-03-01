function $(a) {return document.querySelector(a);}
function $$(a) {return document.querySelectorAll(a);}
var isPhone;
var filterPhone = "win16|win32|win64|mac";
if (navigator.platform) {if (filterPhone.indexOf(navigator.platform.toLowerCase()) < 0) {isPhone = true;} else {isPhone = false;}}