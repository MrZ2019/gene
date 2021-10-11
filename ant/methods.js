/**
 * Created by sha on 11/17/13.
 */

/*
app:    gene
name:   methods.js
desc:   includes small functions

flag:
[
    LIB
]
 */


//
function test(object) {
    alert(object);
}

/*  testFile*/
function testFile(filetype) {
    var exp = new RegExp("\." + filetype + "$");

    return Boolean(filetype.match(exp));
}
/*  iscss   */
function iscss(file) {
    return file.match(/\.css$/);
}

/*  isjs    */
function isjs(file) {
    return file.match(/\.js$/);
}

/*  basename    */
function basename(path) {
    var match = path.match(/[\/|\\][^\/\\]+\.\w+$/);

    if(match) {
        match = match[0].slice(1);
    }

    return match;
}

/*  filename    */
function filename(path) {
    var match = path.match(/[\/|\\][^\/\\]+(?=\.\w+$)/);

    if(match) {
        match = match[0].slice(1);
    }

    return match;
}
/** DOM **/

/*  dom */
function dom(tagName, attrMap) {

    var node = document.createElement(tagName);

    if(_o(attrMap)) {
        var k;
        //  set attribute
        for(k in attrMap) {
            node[k] = attrMap[k];
        }
    }

    return node;
}
