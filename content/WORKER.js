/**
 * Created by sha on 11/18/13.
 */

/*
app:    gene
name:   WORKER.js
 */

/*  CONTRACT    */

var WORKER_FILES =
{
    // Spreader
    Spreader:
    {
        contract: {

        }
    },

    //  Architect
    Architect:
    {
        contract: {
            hold$: true
        }
    },

    Printer:
    {
        contract: {

        },
        share:
            [
                "log", "white"
            ]
    },

    Editer:
    {
        contract: {
            default_mode: "htmlmixed",
            default_theme:  "ambiance",
            default_font: "small",
            default_linenum: true,
            editer_count:   1,
            position:   ["center", 40 ],
            autoShow:   false,
            effect: "blind",
            key: "Ctrl+Win",
            saveKey: "Shift+Ctrl+Alt",

            parent: "#code-dialog1",

            init_code:  "<style>\n</style>\n\n<script>\n</script>",
            autoInspect: true
        },
        dependPage: true
    },

    Inspector:
    {
        contract:
        {
            cursor: "pointer",
            basicClass: "God-Selector",
            extendClass: "",
            hoverClass: "Hover",
            key: "Alt+1",

            mode: "click"
        }
    }
    ,
    Wheeler: {
        contract:
        {
            speKey: "Alt+Ctrl",
            showKey: "Ctrl+Alt+W",
            withInspector: true,
            escapeKey: "Shift+Win",
            saveKey: "Shift+Ctrl+S",
            enableKey: "Ctrl+Shift+Alt+W",

            hideDelay: 5,

            lockClass: "Lock-Node",
            hoverClass: CLASS_GOD_SELECTOR,

            enable: true
        }
    }
}

/*
nae:   _get_worker
 */
function _get_worker(worker_name) {

    return _7(worker_name);
}
/*
name:   _get_files
 */

function _get_files(worker_name) {

    return WORKER_FILES[worke_name];
}

/*
name:   _get_contract
 */

function _get_contract(worker_name, _contract) {

    var contract = WORKER_FILES[worker_name]["contract"];

    //  cover
    return copy(_contract, contract);
}

/*
name:   _get_share
 */
function _get_share(worker_name) {

    var list = [];

    var shares = WORKER_FILES[worker_name].share;
    var worker = cliff("_" + worker_name);
    var iShare = 0;

    for(;iShare < shares.length; iShare++) {
        var share = shares[iShare];

        list.push(worker[share]);
    }

    return list;
}
/*
worker: Printer
 */

function Printer(_contract) {

    var _myname = "Printer";

    //  data

    var my_screens = [];

    var msg_types =
    {
        plain: "Plain",
        error: "Error",
        notice: "Notice",
        warning: "Warning",
        info: "Info",

        //  shortname
        p: "Palin",
        e: "Error",
        n: "Notice",
        w: "Warning",
        i: "Info"
    }

    var _files = _get_files[_myname];

    //  get constract
    var agree = _get_contract(_myname, _contract)

    //  api
    var _this = {
        /*
        name:   log
        desc:   print message
         */
        log: function log(message, type, screens) {

            screens = _get_screens(screens)
            type = type || "plain";

            var msgClass = msg_types[type];

            screens.append(p(message, msgClass));
            //  print msg on every screen
//            var iScreen = 0;
//
//            for(;iScreen < screens.length; iScreen++) {
//                var screen = screens[iScreen];
//
//                var paragraph = $("<p></p>").html(message);
//                paragraph[0].className = msgClass;
//
//                $(screen).append(paragraph);
//            }
        }
        ,
        connect: function(screens) {

            screens = _2A(screens);

            my_screens = my_screens.concat(screens);

            return my_screens;
        },

        white:  function(screens) {

            return _this.set("","plain",screens);
        },

        set:    function(text, type, screens) {


            type = type || "plain";
            text = text || "";
            _get_screens(screens).html(text);

            return _this;
        },

        setColumn:  function(number, screens) {

            number = number || 1;
            _get_screens(screens).css("-webkit-column-count", number);

            return _this;
        }
    }

    return _this;

    function _get_screens(screens) {
        screens = screens || my_screens;
        screens = _2A(screens);

        _domer.extend(screens);

        return screens;
    }
}

/*
work:   Spread
 */

function Spreader() {

    return {

        work: function(masses) {

            var _files = WORKER_FILES;

            masses = _2A(masses);

            //
            var iWorker = 0;

            for(;iWorker < masses.length; iWorker++) {
                var worker = masses[iWorker];
                var share = _get_share(worker);

                worker = cliff(worker);

                copy(share);
            }

            return true;
        }
    }
}

/*
worker: Architect
 */


function Architect(_contract) {

    var my_name = "Architect";
    var agree = _get_contract(my_name, _contract);

    if(agree.hold$ == true) {

        //  reject invasion

        //$(_hold_jquery);
    }

    /*
    name:   _hold_jquery
     */

    function _hold_jquery() {

        if($ !== jQuery) {
            //  recapture $
            $ = jQuery;
        }
    }
}
/*
worker: Designer
 */

function Designer() {

    //  work_map


}

/*
worker: Editer

desc:   code editer, multi theme, multi doc
 */

function Editer(_contract) {

    var my_name = "Editer";
    var options = _get_contract(my_name, _contract);

    var _Parent = $(options.parent) || $("body");
    //  begin.

    var options_map =
    {
        font:   true,
        theme:  true,
        linenum:    true
    }

    /*  fox is sly  */
    var foxes =
    {
        onsave: [],
        oncreate: [],
        onchange: []
    }
    //  var
    var _this;
    var Status = new Object();  //  robot information...

    var _editers = new Array(); //  save editer
    var _editer_nodes = new Array();
    var _editer_count = 0;  //  count
    var _editer_name_counter = 0;
    var _editer_i = 0;
    var hot_editer = null;

    var editer_options = new Array();   //  options
    var editer_status = new Array();

    var cur_status, cur_options;
    //  node

    var _Parent, save_dlg;
    var save_btn, option_btn, new_btn, inspect_btn;

    var editer_box;
    var ck_lineNumber, sel_theme, sel_font;

    var switcher, ul_editer;

    /*  initial dom */
    _create_this();
    _init_dom();

    loop(_create_editer, options.editer_count);

    _connectToPage();
    _install();

    if(options.init_code) {

        var injectNode = $("<div></div>").html(options.init_code);
        injectNode.appendTo($("body"));

        //
        _this.inject(injectNode);
    }

    return _this;

    /*  name:   _create_this    */

    function _create_this() {

        _this =
        {
            new_editer: _create_editer,
            del_editer: _delete_editer,

            /*  name:   inject  */
            inject: function(src, index, options) {

                if(_u(index) || index == -1) {

                    //  opt
                    var opt =
                    {
                        source:src,
                        sourceType: "NODE",
                    }

                    copy(options, opt);
                    _create_editer(opt);
                }
                else {
                    _inject_code(src, index);
                }

            },
            /*  name:   get_code    */
            get_code: function(index) {
                return _get_editer(index).getValue();
            },

            /*  name:   set_code    */
            set_code:   function(val, index) {
                var _e = _get_editer(index);

                var re =  _get_editer(index).setValue(val);
                _e.refresh();

                return re;
            },

            /*  name:   get_editer  */
            get_editer: function(index) {
                return _get_editer(index);
            },

            /*  getDOM  */
            getDOM: function() {
                return _Parent;
            },
            /*
             name:   switch_editer
             */

            switch_editer: function(index) {

                if(_u(index)) {
                    index = 0;
                }

                _switch_editer(index);
                //switcher.children()[index].click();

                ul_editer.tabs("option", "active", index);
            },
            /*
             name:   set_options
             */
            set_option:  function(option_name, option_val, index) {

                if(_u(index)) {
                    index = _editer_i;
                }

                //  may be theme, font, linenum
                if(options_map[option_name]) {
                    editer_options[index][option_name] = option_val;

                    _init_editer(index);
                }
                else {
                    _editers[index].setOption(option_name, option_val);
                }
            },
            get_option:  function(option_name, index) {

                var re;

                if(_u(index)) {
                    index = _editer_i;
                }

                if(options_map[option_name]) {
                    re = editer_options[index][option_name];
                }
                else {
                    re = _editers[index].getOption(option_name);
                }

                return re;
            }
            ,
            delete_all: function() {

                //  delete all editers

                var iEditer = 0;

                for(;iEditer < _editer_count; iEditer++) {

                    _delete_editer(iEditer);
                }
            }
            ,
            /* name:    ambush  */

            ambush: function(callback, type) {

                type = type || "onsave";

                foxes[type].push(callback);
            },

            /*  show:   show    */
            show:   function() {
                _Parent.dialog("open");
                _refresh_editer();
            },

            /*  hide    */
            hide:   function() {
                _Parent.dialog("close");
            },

            /*  toggle  */
            toggle: function() {

                if(_Parent.dialog("isOpen")) {
                    _this.hide();
                }
                else {
                    _this.show();
                }
            }
        }
    }
    /*
     name:   _init_dom
     */

    function _init_dom() {
        _Parent = _Parent;

        option_btn = _Parent.find(".Option-Btn");
        save_btn = _Parent.find(".Save-Btn");
        new_btn = _Parent.find(".New-Btn");
        inspect_btn = _Parent.find(".Inspect-Btn");

        save_dlg = _Parent.find(".Save-Code-Dialog");

        //  editer option
        editer_box = _Parent.find(".Editer-Option-Box");

        ck_lineNumber = _Parent.find("input[name='line-number']");
        sel_theme = _Parent.find("select.Editer-Theme");
        sel_font = _Parent.find("select.Editer-Font");

        //  get switcher
        ul_editer = _Parent.find("#editor-tab");

        ul_editer.tabs({
            activate: function() {

                if(hot_editer) {
                    hot_editer.refresh();
                }
            }
        });

        switcher = ul_editer.find("ul");

        _Parent.dialog({
            poarsition: options.position,
            autoOpen: options.autoShow,
            show: options.effect,
            hide: options.effect
        });
        editer_box.hide();
        save_dlg.hide();

        switcher.hide();

        //
        ul_editer.on("tabsactivate", function(event, ui) {

            if(hot_editer)
            hot_editer.refresh();
        })
    }

    /*
     name:   create_editer
     */

    function _create_editer(_e_options) {

        var e_options =
        {
            mode: options.default_mode,
            theme: options.default_theme,
            font: options.default_font,
            linenum: options.default_linenum,

            source: "",
            sourceType: "HTML",

            auto_focus: true
        }

        copy(_e_options, e_options);

        _editer_count++;
        _editer_i = _editer_count - 1;

        var opts = new Object();
        editer_options[_editer_i] = opts;

        var status = new Object();
        editer_status[_editer_i] = status;
        //  get code

        var _code = "";
        var _source = e_options.source;
        var node;

        var editer_name;
        var extend_class;
        var _2node; // to node branch
        switch(e_options.sourceType) {

            case "HTML":
            {
                _code = _source;
                editer_name = "untitle" + _editer_name_counter;
                _editer_name_counter++;
            }
                break;

            case "NODE":
            {
                _2node = true;
                extend_class = "Injected";
                editer_name = $(_source)[0].tagName + _editer_name_counter;
                _editer_name_counter++;
            }
                break;

            case "Pit":
            {
                editer_name = _source;
                extend_class = "From-Pit";
                _code = Pit.get(_source);
            }
        }
        //  start.
        var _c_active = "uk-active";

        //  if count < 2, hide switcher
        if(_editer_count < 2) {
            switcher.hide();
        }
        else {
            switcher.show();
        }

        var li_switcher = $("<li class=''><a href='#" + editer_name +"'>" + editer_name + "</a></li>");
        li_switcher.addClass(extend_class);

        var a_close = $("<a href='#' class='Close-Btn'>X</a>");

        //switcher.find("." + _c_active).removeClass(_c_active);

        //  create textarea
        var nTextarea = $("<textarea></textarea>");

        nTextarea.className = "Strong-Code-Editer";

        var li_textarea = $("<div></div>");
        li_textarea[0].id = editer_name;

        ul_editer.append(li_textarea);

        li_textarea.append(nTextarea);

        switcher.append(li_switcher);
        a_close.click(_close_onclick);
        li_switcher.append(a_close);

        //li_switcher.click();    //  triger mouse event

        var editer = CodeMirror.fromTextArea(nTextarea[0], {
            value: _code,
            mode: e_options.mode,
            styleActiveLine: true,
            matchBrackets: true,
            extraKeys:
            {
                "F11": function(cm) {
                    cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                }
                ,
                "Esc": function(cm) {
                    if(cm.getOption("fullScreen")) {
                        cm.setOption("fullScreen", false);
                    }
                }
            }
        })

        _editers.push(editer);
        //  get node
        var editerNode = nTextarea.next();
        _editer_nodes.push(editerNode);

        hot_editer = editer;

        opts["font"] = e_options.font;
        opts["theme"] = e_options.theme;
        opts["linenum"] = e_options.linenum;

        status["title"] = editer_name;

        //  _2node
        if(_2node) {
            _inject_code(_source, _editer_i);
        }
        // refresh
        ul_editer.tabs("refresh");

        _init_editer();

        if(e_options.auto_focus) {
            _this.switch_editer(_editer_i);
        }
    }

    /*
     name:   _connectToPage
     */

    function _connectToPage() {

        //  bind key
        if(options.key) {
            keys(options.key, _this.toggle);
        }

        if(options.saveKey) {
            keys(options.saveKey, _save_code, "keydown",
                {
                    prevent: true,
                    stop_:  true
                });
        }

        //  show:   switch editer
        switcher[0].addEventListener("click", function() {

            var _t = event.target;

            if(_t.tagName !== "A" || $(_t).hasClass("Class-Btn")) {
                return;
            }
            var index = $(_t).parent().index();

            _this.switch_editer(index);
        }, true)

        //  dblclick:   refresh
        switcher[0].addEventListener("dblclick", function() {

            var _t = event.target;

            if(_t.tagName !== "A" || $(_t).hasClass("Class-Btn")) {
                return;
            }

            var index = $(_t).parent().index();
            //  repeat upon

            var _status = editer_status[index];
            if(_status["injectMode"]) {

                //  reload code
                _this.set_code(_status["node"].html(), index);
            }
        })
        //  click:  new
        new_btn.click(function() {

            _create_editer();
        })

        //  mouse:  inspect
        inspect_btn.click(function() {

            //  inspect
            if(ID_Inspector) {

                //  if him not air

                if(! Status.inspector_connected) {
                    _Inspector.connect(when_inspect, "eat");

                    Status.inspector_connected = true;
                }

                _Inspector.start();
                _Parent.dialog("close");

                _Inspector.pause_awhile();
            }
        })
        //  click:  save
        save_btn.click(function() {

            _save_code();
        })

        //  click: options
        option_btn.click(function() {

            editer_box.toggle("fadeIn");
        })

        //  check: linenumber
        ck_lineNumber.bind("change", function() {
            _this.set_option("linenum", this.checked);
            setEditerLineNumber();
        })

        //  change: theme
        sel_theme.bind("change", function() {
            _this.set_option("theme", this.value);
            setEditerTheme();
        })

        //  change: font
        sel_font.bind("change", function() {
            _this.set_option("font", this.value);
            setEditerFont();
        })
    }

    /*
    name:   _install
     */
    function _install() {

        if(options.autoInspect) {

            _Inspector.connect(when_inspect, "eat");

            Status.inspector_connected = true;
        }
    }
    /*
     name:   setEditerTheme
     */

    function setEditerTheme(index) {
        _get_editer(index).setOption("theme", _this.get_option("theme", index));
    }

    /*
     name:   setEditerFont
     */
    function setEditerFont(index) {
        _get_editer(index, true).css("fontSize", _this.get_option("font", index));
    }

    /*
     name:   setEditerLineNumber
     */
    function setEditerLineNumber(index) {
        _get_editer(index).setOption("lineNumbers", _this.get_option("linenum", index));
    }

    /*
     name:   _get_editer
     desc:   return editer with index
     */

    function _get_editer(index, isNode) {
        var my_obj;

        //  if index not number, return hot editer
        if(! _n(index)) {
            index = _editer_i;
        }

        if(isNode) {
            my_obj = _editer_nodes[index];
        }
        else {
            my_obj = _editers[index];
        }

        return my_obj;
    }

    /*
     name:   _delete_editer
     */
    function _delete_editer(index) {

        _editer_count--;
        switcher.children()[index].remove();
        ul_editer.children()[index+1].remove();
        ul_editer.tabs("refresh");


        if(! _move_forward()) {
            _no_move();
        }

        if(_editer_count > 0) {
            //switcher.children()[_editer_i].click();
            _switch_editer(_editer_i);
            _init_title();
    }
        else {
            _init_title(null, "...");
        }

        /*
         name:   _move_forward
         */

        function _move_forward() {

            //  +
            if(_editers[index + 1]) {

                _del_editer();
                //
                if(_editer_i > index) {
                    _editer_i--;
                }
                else if(_editer_i <= index) {
                    //  no action
                }

                return true;
            }

            return false;
        }

        /*
         name:   _no_move
         */
        function _no_move() {

            if(! _editers[index + 1]) {

                _del_editer();

                if(_editers[index -1 ]) {

                    if(_editer_i == index) {
                        _editer_i --;
                    }
                }
            }
        }

        /*
         name:   _del_editer
         */
        function _del_editer() {
            _editers.splice(index, 1);
            _editer_nodes.splice(index, 1);
            editer_options.splice(index, 1);
            editer_status.splice(index, 1);
        }
    }

//    /*  name:   _get_option */
//
//    function _get_option(option_name,index) {
//
//        if(_u(index)) {
//            index = _editer_i;
//        }
//
//        return editer_options[index][option_name];
//    }

    /*
     /*
     name:   _init_editer
     */
    function _init_editer(index) {

        setEditerTheme(index);
        setEditerLineNumber(index);
        setEditerFont(index);
    }

    /*  name:   _init_options_box   */
    function _init_options_box() {

        ck_lineNumber[0].checked = _this.get_option("linenum");
        sel_theme[0].value = _this.get_option("theme");
        sel_font[0].value = _this.get_option("font");
    }

    /*  name: _switch_editer    */
    function _switch_editer(index) {
        _editer_i = index;
        hot_editer = _editers[index];

        cur_options = editer_options[index];
        cur_status = editer_status[index];

        _init_options_box();
        _init_title(index);

        ul_editer.tabs("option", "active", index);
        _refresh_editer();
    }

    /*  name:   _inject_code    */
    function _inject_code(src, index) {

        if(_u(index)) {
            index = _editer_i;
        }

        var selector, dom;

        dom = $(src);
        selector = dom.selector || dom[0].tagName;
        //  v: status
        var _status;
        _status = editer_status[index];
        _status["injectMode"] = true;
        _status["node"] = dom;
        _status["selector"] = selector;

        _status["title"] = selector;
        //$(switcher.children()[index]).find("a:eq(0)").html(selector);  //  set tab text

        _this.set_code(dom.html());
        _init_title(index);
    }

    /*  name:   _init_title */
    function _init_title(index, text) {
        if(_u(index)) {
            index = _editer_i;
        }
        text = text || editer_status[index].title;

        _Parent.dialog("option", "title", text);
    }

    /*  _save_code  */
    function _save_code() {

        //  show save dialog

        var code = hot_editer.getValue();
        if(cur_status["injectMode"]) {

            cur_status["node"].html(code);
        }
        else {
            save_dlg.dialog(
                {
                    modal: true,
                    buttons: {
                        yes: function() {

                            /*
                             desc:   arg [ filename, code, {..} ]
                             */
                            var arg =
                                [
                                    $("input[name='save_name']")[0].value,
                                    code,,
                                    {
                                        index: _editer_i,
                                        injected: editer_options["injected"]
                                    }
                                ]
                            //  get args
                            _calls(foxes["onsave"], arg);
                            $(this).dialog("close");
                        },
                        no: function() {
                            $(this).dialog("close");
                        }
                    }
                }
            )
        }
    }
    /*  name:   _refresh_editer     */
    function _refresh_editer() {

        //switcher.children()[_editer_i].click();
        hot_editer.refresh();
    }
    /*  listener    */
    function _close_onclick() {

        _delete_editer($(this).parent().index());
    }

    /*  when:   when_inspect    */
    function when_inspect(node) {

        _this.inject(node);

        _Parent.dialog("open");
        _refresh_editer();
    }
}

/*
 worker: Inspector
 */

function Inspector(_options) {

    var _only = "Inspector";

    var options = _get_contract(_only, _options);
    //
    ID_Inspector = "hello !";

    copy(_options, options);

    //  data:
    var places =
    {
        eat:    [],
        look:   [],
        escape: []
    }

    var hadExt = false;

    //  cool var
    var _Inspect_Event_Lock = false;

    if(options.extendClass) {
        hadExt = true;
    }

    var iambusy = false;    //  in the begin
    var iampause = false;

    /*
    flag:
     */
    var FLAG_ALLNODES = false;

    var _this = {

        /*  name:   start   */
        start:  function(exp, sign) {

            if(iambusy) {
                return; //  i am busy
            }

            if(_u(exp)) {
                _ANYNODE = $("*");

                FLAG_ALLNODES = true;
            }
            else {
                FLAG_ALLNODES = false;

                if(_s(exp)) {

                    if(sign == "xpath") {
                        _ANYNODE = _villain.eval_xpath(exp);
                    }
                    else {
                        _ANYNODE = $(exp);
                    }
                }
            }

            _ANYNODE = _ANYNODE || exp;
            addEventListener(_work_mode, _inspect_onclick);
            _ANYNODE.bind("mouseover", _inspect_onover);

            if(! FLAG_ALLNODES) {
                change_myskin(_ANYNODE, true);
            }

            iambusy = true;
        },
        stop: function() {

            if(! iambusy) {
                return; //  i am not working...
            }
            removeEventListener(_work_mode, _inspect_onclick);

            _ANYNODE.unbind("mouseover", _inspect_onover);
            //  remove class
            change_myskin(null);

            iambusy = false;
        },
        /*  name:   urgeMe  */
        urgeMe: function (exp, sign) {

            if(iambusy) {
                _this.stop();
            }
            else {
                _this.start(exp, sign);
            }
        },
        /*  name: care_me   */
        care_me: function () {
            return iambusy;
        },
        /*  name:   pause_awhile    */
        pause_awhile: function() {

            iampause = true;
        },
        /*  name:   connect */
        connect: function(callback, path) {

            path = path || "eat";
            places[path].push(callback);
        },
        /*  name    changeMode  */
        changeMode: function(mode) {
            _this.stop();
            _work_mode = mode;
            _this.start();
        }
    };
    keys(options.key, _this.urgeMe, "keydown", {
        prevent: true
    });

    //  init
    var _ANYNODE;

    //  now, i am here
    _Inspector = _this;

    var _work_mode = options.mode;

    return _this;

    /* mouseover:   _inspect_onover */
    function _inspect_onover() {
        event.stopPropagation();

        if(FLAG_ALLNODES) {
            change_myskin(null);
        }

        $("." + options.hoverClass).removeClass(options.hoverClass);

        var _target = event.target;

        if(! _check_node(_target)) {
            return;
        }

        change_myskin($(_target), true, true);
    };

    /*  click:  _inspect_onclick    */
    function _inspect_onclick() {

        var node = event.target;

        _get_node_content(node);
    };

    /*  dblclick    _inspect_ondblclick */
    function _inspect_ondblclick() {

        var node = event.target;

        _get_node_content(node);
    }

    /*  name:  find_myskin  */
    function change_myskin(nodes, isGot, isHover) {

        if(! nodes) {
            nodes = _ANYNODE;
        }
        //  god selected you
        if(isGot) {
            nodes.addClass(options.basicClass);

            if(isHover) {
                nodes.addClass(options.hoverClass);
            }

            if(hadExt) {
                nodes.addClass(options.extendClass);
            }
        }
        else {
            _ANYNODE.removeClass(options.basicClass);

            nodes.removeClass(options.hoverClass);

            if(hadExt) {
                _ANYNODE.removeClass(options.extendClass);
            }
        }
    };

    /*  name:   _check_node */
    function _check_node(aim) {

        // get all nodes
        if(FLAG_ALLNODES == true) {
            return true;
        }
        var isfind = false;

        _ANYNODE.each(function(i, node) {

            if(node == aim) {
                isfind = true;
            }
        })

        return isfind;
    }

    /*  name:   _get_node_content   */
    function _get_node_content(node) {
        if(_Inspect_Event_Lock || iampause) {
            iampause = false;
            return;
        }
        //  action
        _Inspect_Event_Lock = true;
        _this.stop();

        if(_check_node(node)) {
            _calls(places["eat"], [ node ]);
        }

        _Inspect_Event_Lock = false;
    }
};

/*
worker: Wheeler
 */

function Wheeler(_options) {

    //  no dialog?

    var my_id = "Wheeler";
    var options = _get_contract(my_id, _options);

    var keys2Style =
    {
        B:
        {
            styleName: "color",
            mode: "color",
        }
        ,
        N:
        {
            styleName: "background",
            mode: "color"
        },
        Z:
        {
            styleName: "color",
            mode:   "color16",
            extName:    16
        },
        X:
        {
            styleName: "background",
            mode:   "color16",
            extName:    16
        },
        C:
        {
            styleName: "color",
            mode:   "color139",
            extName: 139
        },
        V:
        {
            styleName: "background",
            mode:   "color139",
            extName: 139
        },
        Q:
        {
            styleName: "opacity",
            minVal: 0,
            maxVal: 1,
            step: 0.05
        },
        F:
        {
            styleName: "font-size",
            minVal: 8,
            maxVal: 72,
            step: 1
        },
        W:
        {
            styleName: "width",
            minVal: 0,
            maxVal: 9999,
            step:   10
        },
        H:
        {
            styleName: "height",
            minVal: 0,
            maxVal: 9999,
            step:   10
        },
        M: {
            styleName: "margin",
            minVal: -9999,
            maxVal: 9999,
            step: 4
        },
        P: {
            styleName: "padding",
            minVal: 0,
            maxVal: 9999,
            step: 4
        },


        /*  cool css3   */
        R:
        {
            styleName: "transform",
            mode: "transform",
            option1: "rotate",
            option2: "deg",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },

        T:
        {
            styleName: "transform",
            mode: "transform",
            option1: "translate",
            option2: "px",
            option3: "x",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },
        Y:
        {
            styleName: "transform",
            mode: "transform",
            option1: "translate",
            option2: "px",
            option3: "y",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },
        S:
        {
            styleName: "transform",
            mode: "transform",
            option1: "scale",
            option2: "",
            option3: "x",
            defVal: 1,
            minVal: 0,
            maxVal: 9999,
            step: 0.1
        },
        D:
        {
            styleName: "transform",
            mode: "transform",
            option1: "scale",
            option2: "",
            option3: "y",
            defVal: 1,
            minVal: -9999,
            maxVal: 9999,
            step: 0.1
        },
        "-":
        {
            styleName: "transform",
            mode: "transform",
            option1: "skew",
            option2: "deg",
            option3: "x",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },
        "+":
        {
            styleName: "transform",
            mode: "transform",
            option1: "skew",
            option2: "deg",
            option3: "y",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },
        ";":
        {
            styleName: "transform-origin",
            mode: "transform",
            option1: "",
            option2: "%",
            option3: "x",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 2
        },
        "'":
        {
            styleName: "transform-origin",
            mode: "transform",
            option1: "",
            option2: "%",
            option3: "y",
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 2
        },
        "1":
        {
            styleName: "transform",
            mode: "transform",
            option1: "rotate",
            option2: "deg",
            option3: "X",
            _3d: true,
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        }
        ,
        "2":
        {
            styleName: "transform",
            mode: "transform",
            option1: "rotate",
            option2: "",
            option3: "Y",
            _3d: true,
            defVal: 0,
            minVal: 0,
            maxVal: 9999,
            step: 8
        },
        "3":
        {
            styleName: "transform",
            mode: "transform",
            option1: "rotate",
            option2: "",
            option3: "Z",
            _3d: true,
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },
        "4":
        {
            styleName: "transform",
            mode: "transform",
            option1: "translate",
            option2: "px",
            option3: "X",
            _3d: true,
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        }
        ,
        "5":
        {
            styleName: "transform",
            mode: "transform",
            option1: "translate",
            option2: "px",
            option3: "Y",
            _3d: true,
            defVal: 0,
            minVal: 0,
            maxVal: 9999,
            step: 8
        },
        "6":
        {
            styleName: "transform",
            mode: "transform",
            option1: "translate",
            option2: "px",
            option3: "Z",
            _3d: true,
            defVal: 0,
            minVal: -9999,
            maxVal: 9999,
            step: 8
        },
        "7":
        {
            styleName: "transform",
            mode: "transform",
            option1: "scale",
            option2: "",
            option3: "X",
            _3d: true,
            defVal: 1,
            minVal: 0,
            maxVal: 9999,
            step: 0.1
        }
        ,
        "8":
        {
            styleName: "transform",
            mode: "transform",
            option1: "scale",
            option2: "",
            option3: "Y",
            _3d: true,
            defVal: 1,
            minVal: 0,
            maxVal: 9999,
            step: 0.1
        },
        "9":
        {
            styleName: "transform",
            mode: "transform",
            option1: "scale",
            option2: "",
            option3: "Z",
            _3d: true,
            defVal: 1,
            minVal: 0,
            maxVal: 9999,
            step: 0.1
        }
    };

    //  map
    var __m = keys2Style;

    var _2dtrans_map = {

        rotate:
        {
            coor: "",
            value: __m["R"].defVal,
            unit: __m["R"].option2
        }
        ,
        translate:
        {
            coor: "coor",
            xVal: __m["T"].defVal,
            yVal:  __m["Y"].defVal,
            unit: __m["T"].option2
        }
        ,
        scale:
        {
            coor: "coor",
            xVal: __m["S"].defVal,
            yVal: __m["D"].defVal,
            unit: __m["S"].option2
        }
        ,
        skew: {
            coor: "coor",
            xVal: __m["-"].defVal,
            yVal: __m["+"].defVal,
            unit: __m["-"].option2
        }
    };

    var _3dtrans_map =
    {
        rotate:
        {
            coor: "coor",
            unit: __m["1"].option2,
            XVal: __m["1"].defVal,
            YVal:  __m["2"].defVal,
            ZVal: __m["3"].defVal,
            unit: __m["1"].option2
        }
        ,
        translate:
        {
            coor: "coor",
            XVal: __m["4"].defVal,
            YVal:  __m["5"].defVal,
            ZVal: __m["6"].defVal,
            unit: __m["4"].option2
        }
        ,
        scale:
        {
            coor: "coor",
            XVal: __m["7"].defVal,
            YVal: __m["8"].defVal,
            ZVal: __m["9"].defVal,
            unit: __m["7"].option2
        }
    };

    var Status = {
        enabled: options.enable
    };

    var needSave;
    //  ul
    var _DOM;
    var _DOM_helper, _DOM_sign, _DOM_status, _DOM_msg;

    var _STATUS_CONNECTED = false;
    var _delay_handler = null;

    var nodes_restore_data = [];
    var nodes_transform_data = [];
    var nodes_3dtransform_data = [];

    var check_nodes = [];
    var _lock_node;
    //
    var iKey;
    var styleName;
    for(iKey in keys2Style) {

        iKey += "+" + options.speKey;

        keys(iKey, when_start_wheel);
    }

    keys(options.escapeKey, function() {

        needSave = false;

        when_escape_wheel();
    });

    //  save change
    keys(options.saveKey, function() {

        needSave = true;

        when_escape_wheel();
    })
    keys(options.showKey, _wheeler_toggle);

    keys(options.enableKey, _toogle_enable);

    spy(when_lock_node, "click");

    spy(when_wheelThePage, "mousewheel");

    return {

        /*  name:   connect */
        connect: function(Node){

            _DOM = Node;
            initDOM();
            _STATUS_CONNECTED = true;
        }
    }

    /*  name:   f_restore_nodes   */

    function f_restore_nodes() {

        var iData = 0;

        for(;iData < nodes_restore_data.length; iData++) {

            var curNodeData = nodes_restore_data[iData];
            var curNode = check_nodes[iData];

            //  restore css
            var styleName, styleValue;
            for(styleName in curNodeData) {

                var styleValue = curNodeData[styleName];

                $(curNode).css(styleName, styleValue);
            }
        }
    }

    /*  name:   initDOM */

    function initDOM() {

        var keyName, _map;

        var cssName;
        //  create list
        for(keyName in keys2Style) {

            //  get map
            _map = keys2Style[keyName];

            if(_map.mode == "transform") {

                if(_map.option1) {
                    cssName = _map.option1;
                }
                else {
                    cssName = _map.styleName;
                }

                //  not x + y
                if(_map.option3) {
                    cssName += "-" + _map.option3;
                }
            }
            else {
                cssName = _map.styleName;
            }

            if(_map.extName) {
                cssName += "-" + _map.extName;
            }
            _DOM_helper = _DOM.find("ul#wheeler-help");
            _DOM_helper.append("<li><span>" + keyName + "</span>" + "<span>" + cssName + "</span></li>");
        }

        //  bind click
        _DOM_sign = _DOM.find("#wheeler-sign");
        _DOM_sign.click(when_sign_click);

        //
        _DOM_status = _DOM.find("#wheeler-status");
        _DOM_msg = _DOM.find("#wheeler-message");
    }

    /*  name:   showHint    */
    function _showHint(txt) {

        if(_STATUS_CONNECTED == true) {

            _DOM_status.removeClass("Dark");

            //  set message
            _DOM_msg.html(txt);

            clearTimeout(_delay_handler);

            _delay_handler = _delay(function() {

                _DOM_status.addClass("Dark");

            }, options.hideDelay)
        }
    }

    /*  name:   _toogle_enable  */
    function _toogle_enable() {

        if(Status.enabled) {
            Status.enabled = false;

            //  if started
            if(Status.started) {

                when_escape_wheel();
            }

            _DOM.fadeOut();
        }
        else {
            Status.enabled = true;

            _DOM.fadeIn();
        }
    }
    /*  keydown:    when_escape_wheel   */

    function when_escape_wheel() {

        if(Status.started) {
            Status.started = false;

            if(! needSave) {
                f_restore_nodes();
            }

            //  clear data
            nodes_restore_data = [];
            check_nodes = [];
            nodes_transform_data = [];
            nodes_3dtransform_data = [];

            if(Status.ConnectedInspector == true) {
                _Inspector.stop();
            }

            //  remove class
            $("." + options.lockClass).removeClass(options.lockClass);
            $("." + options.hoverClass).removeClass(options.hoverClass);
            _lock_node = null;

            _showHint("stoped");
        }
    }

    /*  keydown:    when_start_wheel    */

    function when_start_wheel() {

        if(Status.enabled == false) {
            return;
        }

        Status.started = true;

        var keyname = Map.Keys[event.keyCode];

        Status.keyword= keyname;

        _showHint("started");
        //  start Inspector
        if(options.withInspector) {

            if(! Status.ConnectedInspector) {
                _Inspector.changeMode("dblclick");

                _Inspector.connect(when_inspector_get, "eat");
                Status.ConnectedInspector = true;
            }

            _Inspector.start();
        }
    }
    /*  wheel:  when_wheelThePage   */

    function when_wheelThePage() {

        var isUp = event.wheelDelta == 120;

        if(Status.started) {

            var _map = keys2Style[Status.keyword]

            var _t_node = _lock_node || event.target;

            // get step
            var _step = isUp ? _map.step : -_map.step
            var node_i = search(check_nodes, _t_node);
            var node_data;

            if(node_i !== false) {
                node_data = nodes_restore_data[node_i];

                if(_map._3d) {
                    trans_data = nodes_3dtransform_data[node_i];
                }
                else {
                    trans_data = nodes_transform_data[node_i];
                }
            }
            else {
                node_data = new Object();   //  create object save initial value
                nodes_restore_data.push(node_data);
                check_nodes.push(_t_node);

                //  if transform
                var trans_data = clone(_2dtrans_map, true);
                nodes_transform_data.push(trans_data);

                var _3dtrans_data = clone(_3dtrans_map, true);
                nodes_3dtransform_data.push(_3dtrans_data);

                //  get 3d data
                if(_map._3d) {
                    trans_data = _3dtrans_data;
                }
            }

            //  get hot node!
            var node = $(_t_node);

            //  remove hover
            node.removeClass(options.hoverClass);

            var styleName, styleValue;
            var numValue;

            styleName = _map.styleName;
            var _unit = _map.option2;

            var hasBorder = false;

            styleValue = node.css(styleName);

            if(! node_data[styleName]) {
                node_data[styleName] = styleValue;
            }
            //  convert to number
            styleValue = parseFloat(styleValue);

            if(_map.mode == "transform") {

                var motion = _map.option1;
                //  get map
                var motionMap = trans_data[motion];

                var _coor = motionMap.coor;

                if(_coor) {
                    motionMap[_map.option3 + "Val"] += _step;
                }
                else {
                    motionMap.value += _step;
                }

                /*var motion = _map.option1;

                var _coor = _map.option3;

                if(_coor) {
                    motion = motion + "-" + _coor;
                }
                //  no data?
                styleValue = trans_data[motion];

                if(_u(styleValue)) {
                    trans_data[motion] = 0;

                    styleValue =  _map.defVal || 0;
                }
                else {

                    styleValue += _step;
                    trans_data[motion] = styleValue;
                }*/
            }

            switch(_map.mode) {

                case "color":
                {
                    styleValue = getColor();
                }
                    break;

                case "color16":
                {
                    styleValue = _painter.get16Color();
                }
                    break;

                case "color139":
                {
                    styleValue = _painter.get139Color();
                }
                    break;

                case "transform":
                {
                    var iTrans = 0;

                    var value_list = [];

                    var curVal;

                    var dataItem;
                    var _map_2, _motion_2;

                    var _motionKey, _unit_2;
                    for(_motionKey in trans_data) {

                        dataItem = trans_data[_motionKey];

                        _motion_2 = _motionKey;
                        _unit_2 = dataItem.unit;

                        var _x, _y, _z;
                        if(_map._3d == true) {

                            var _array_3 = [];

                            _x = dataItem.XVal;
                            _y = dataItem.YVal;
                            _z = dataItem.ZVal;

                            _x = _motion_2 + "X(" + _x + _unit_2 + ")";
                            _y = _motion_2 + "Y(" + _y + _unit_2 + ")";
                            _z = _motion_2 + "Z(" + _z + _unit_2 + ")";

                            _array_3.push(_x);
                            _array_3.push(_y);
                            _array_3.push(_z);

                            curVal = _array_3.join(" ");
                        }
                        else {

                            _x = dataItem.xVal + _unit_2;
                            _y = dataItem.yVal + _unit_2;

                            if(dataItem.coor) {

                                curVal = _motion_2 + "(" +  _x + "," + _y + ")";
                            }
                            else {

                                curVal = _motion_2 + "(" + dataItem.value + _unit_2 + ")";
                            }
                        }
                        //
                        value_list.push(curVal);
                    }

                    styleValue = value_list.join(" ");

                    hasBorder = false;
                }
                    break;

                default:{

                    styleValue += _step;
                    numValue = styleValue;

                    hasBorder = true;
                }
            }

            //  check number border
            if(!hasBorder || (numValue <= _map.maxVal && numValue > _map.minVal)) {
                node.css(styleName, styleValue);

                _showHint(styleName + " = " + styleValue);
            }

            event.preventDefault();
        }
    }

    /*
     keydown:    when_lock_node
     */
    function when_lock_node() {

        if(Status.started) {

            var _node = event.target;

            var _class = options.lockClass;

            //  unlock
            if(_node == _lock_node) {
                $(_lock_node).removeClass(_class);
                _lock_node = null;
            }
            else {
                $(_lock_node).removeClass(_class);
                _lock_node = _node;
                $(_lock_node).addClass(_class);
            }
        }
    }

    /*  click:  when_sign_click */

    function when_sign_click() {

        //  toggle helper
        _DOM_helper.toggle("puff");
    }

    /*  show:   _wheeler_toggle   */
    function _wheeler_toggle() {

        if(_DOM_status.css("display") !== "none") {
            _DOM_status.hide();
            _DOM_helper.hide();
        }
        else {
            _DOM_status.show();
        }
    }

    /*  when_inspector_get  */
    function when_inspector_get() {

        if(Status.started) {

            _Inspector.start();
        }
    }

}