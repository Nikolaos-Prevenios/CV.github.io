function colorblind(){
    var theme = document.getElementsByTagName("link")[0];
    if (theme.getAttribute('href') == 'css2.css'){
        theme.setAttribute('href', 'css_fil.css');
    }
    else {
        theme.setAttribute('href', 'css2.css');
    }
}


function largetext(){
    const body = document.getElementsById('body');
    body.style.fontSize = 'xx-large';
}