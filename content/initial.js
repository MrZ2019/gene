/**
 * Created by sha on 11/16/13.
 */

/*
app: virus
name: initial.js
 */

//  step 1 meet
//  :test finished

//alert("i an angry");

var checkResult;

var docEle = document.documentElement;

checkResult = docEle.getAttribute("ant");

if(checkResult == null) {
    setTimeout(__initial, 0);
}
else {
    __initial();
}


function __initial() {
    //  step 2
    var WEB_GENE = "GENE!!!";
    _untitle();

    _InjectJS( [/*"spy",*/ "ant.js", /*"ant.ui",*/ "jquery.js", /*"uikit.js",*/ "page.init.js"] );

    if(docEle.getAttribute("ant-ui") != null) {
        _InjectJS(["ant.ui"]);
    }

    _LOAD([ /*"jquery"*/, /*"jquery-ui"*//*,"uikit.js"*/,"codemirror"]);

    // setTimeout
    setTimeout(function() {

        _LOAD(["ant", "jquery", "jquery-ui"]);
    }, 6000);


    ANT._active();

    //  step3   draw roles

    spy(
        function() {
            _DRAW([ "cosmos", "prompt-man", "main-printer", "cool-editer", "Wheeler"]);
        }
    );

    //  step4   employe worker

    _EMPLOYE([ "Spreader", "Architect", "Printer", "Editer","Inspector"]);

    _Spreader.work([ "Printer" ]);
}