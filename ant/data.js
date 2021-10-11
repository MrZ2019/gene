/**
 * Created by sha on 11/17/13.
 */

/*
app:    ant.js
name:   data.js
desc:   contains data
 */

/*  code map    */
var CODE_MAP =
{
    "spy": "$ = spy;function spy(task, when, prey) {prey = prey || window;when = when || \"load\";prey.addEventListener(when, task)};"
,
    "ant.js": _SHELL_ANT.toString() + "_SHELL_ANT();"
}
/*  files map */
var EXT_PATH = chrome.extension.getURL("");

var FILES_MAP =
{
    "ant": ["ant.js"]
}

/*
desc:   <head> id
 */
var _head_id = "my-head";
var _my_box_id = "my-box";