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
