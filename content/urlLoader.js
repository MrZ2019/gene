/**
 * Created by sha on 12/11/13.
 */


//  main

//_loadFromURL(["http://gate/js/ant/ant.js", "http://gate/js/ant/ant.ui.js"]);

/*  name：   loadFromURL */

function _loadFromURL(url) {

    var xmlhttp;    //  a request object

    if(url.charAt) {
        url = [ url ];  //  string to []
    }

    for(var k = 0; k < url.length; k++) {
        xmlhttp = new XMLHttpRequest();

        xmlhttp.open("GET", url[k], false);

        xmlhttp.send();

        //  eval code
        var code = xmlhttp.responseText;

        eval.call(window, code);    //  eval on global
    }

    return true;
}