/*High Contrast*/
function colorblind(){
    var theme = document.getElementsByTagName("link")[0];
    if (theme.getAttribute('href') == 'css2.css'){
        theme.setAttribute('href', 'css_fil.css');
    }
    else {
        theme.setAttribute('href', 'css2.css');
    }
}

/* Google translate*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', 
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
     'google_translate_element');
}

/*Menu hide and seek*/
function show(){
    var status = document.getElementById("meny");
    if (status.style.display === "none")
    {status.style.display = "flex";}
    else{
        status.style.display = "none";
    }
}


// function checkTime(i){
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// function startTime(){
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
//     minutes = checkTime(minutes);
//     seconds = checkTime(seconds);
//     let time = hours + ":" + minutes + ":" + seconds;
//     document.getElementsById("clock").innerHTML = time;
//     t = setTimeout(function () {
//         startTime()
//     }, 500);
// }

// startTime();