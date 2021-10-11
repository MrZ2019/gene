/**
 * Created by sha on 11/18/13.
 */
/*
app: gene.js
name: DOM.js
desc:
*/

var DOM_PACK = {

    "cosmos":
    {
        struct: "<div id='cosmos'></div>"

    },
    //  "prompt-man

    "prompt-man":
    {
        struct: "<input type='text' id='prompt-man'autofocus/>",
        behavior: function() {

            this.bind("change", function() {

                var command = this.value;

                _EXECUTE(command);
            })
        },
        password: "Alt+Win"
    },

    "main-printer":
    {
        struct: "<div id='main-printer' class='Printer'></div>",
        behavior: function() {
            _Printer.connect(this[0]);
        },
        password: [ "F4", "Alt+Win" ]
    },

    "cool-editer":
    {
        struct: "<!--here code for inject--><div id=\"code-dialog1\" class=\"Code-Editer-Dialog\" title=\"untitle\"><!--option box--><div class=\"Code-Dialog-Box\"><button class=\"Save-Btn btn btn-success\">Save</button><!--+--><button class=\"Inspect-Btn btn btn btn-danger\">&lt;&gt;</button><button class=\"New-Btn btn btn btn-success\">+</button><button class=\"Option-Btn btn btn-default\">Options</button><div class=\"Editer-Option-Box form-inline\"><label>line number<input type=\"checkbox\" class=\"\" name=\"line-number\"></label><label>                    theme                    <select class=\"Editer-Theme form-control\"><option>ambiance</option><option>default</option><option>lesser-dark</option><option>monokai</option><option selected=\"\">night</option><option>the-matrix</option></select></label><label>                        font                        <select class=\"Editer-Font form-control\"><option selected=\"\">small</option><option>medium</option><option>large</option></select></label></div></div><div id=\"editor-tab\"><ul></ul></div><!--confirm dialog--><div class=\"Save-Code-Dialog\" title=\"Save Dialog\"><input type=\"text\" name=\"save_name\" class=\"form-control\" placeholder=\"File name\"></div></div>",
        behavior: function() {

        }
    },

    "Wheeler":
    {
        struct: "<div id=\"page-wheeler\"><ul id=\"wheeler-help\"></ul><!--wheeler-status--><div id=\"wheeler-status\"><div id=\"wheeler-sign\">W</div><div id=\"wheeler-message\"></div></div></div>",
        behavior: function() {

            _Wheeler = _get_worker("Wheeler");

            _Wheeler.connect(this);
        },
        autoOpen: true
    }
}