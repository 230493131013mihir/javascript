function eventhandlermouse(){
    console.log("eventhandlermouse");   
}

function eventhandlerkeyboard(){
    console.log("keyboard down");   
}

function eventhandlerkeyboard(){
    console.log("keyboard up");   
}

function onfocusevent(){
    console.log("onfocus");   
}

function onblurevent(){
    console.log("onblur");   
}

function onsubmitevent(){
    console.log("onsubmit");   
}

function onchangeevent(){
    const c=document.getElementById ("country").value
    console.log(c);   
}

function onwindowload(){
    console.log("onwindowload")
}

window.onload=onwindowload

function onwindowunload(){
    console.log("onwindowunload")
}

window.onload=onwindowunload

function onwindowresize(){
    console.log("onwindowresize")
}

window.onresize=onwindowresize