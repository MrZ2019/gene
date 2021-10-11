/**
 * Created by sha on 11/17/13.
 */

/*
app:    gene
name:   preload.js
desc:   load any
 */

/*  _LOAD   */

function _LOAD(srcnames) {

    if(! _A(srcnames)) {
        srcnames = [ srcnames ];
    }

    //  load multi file
    var iFile = 0;

    for(;iFile < srcnames.length; iFile++) {
        __loadfile(srcnames[iFile]);
    }

    /*
    name: __loadfile
     */
    function __loadfile(srcName) {
        //  get source
        var source;

        source = FILES_MAP[srcName];

        var load_signs = [];

        if(_s(source)) {
            //  convert to array
            source = [source];
        }

        if(_A(source)) {
            load_signs.push("direct");

            var temp = source;
            source = {
                "direct": temp
            }
        }
        else if(_o(source)) {

            if(source["direct"]) {
                load_signs.push("direct");
            }

            if(source["follow"])
            {
                load_signs.push("follow");

                //  add load event
                if(_ISSET_LOAD_QUEUE == false) {

                    spy(_loadfile_onload);
                    _ISSET_LOAD_QUEUE = true;
                }
            }
        }

        //
        for(var iSign = 0; iSign < load_signs.length; iSign++) {

            var sign = load_signs[iSign];
            var sourcefiles = source[sign];

            //  ont by one
            for(var iFile = 0; iFile < sourcefiles.length; iFile++) {
                var curFile = sourcefiles[iFile];

                //  append extension path

                if(curFile.match(/#$/)) {

                    curFile = curFile.replace("#", "");
                }
                else {
                    curFile = EXT_PATH + curFile;
                }

                var node;
                if(iscss(curFile)) {
        /*            node = dom("style",
                        {
                            rel: "stylesheet",
                            href: curFile
                        })*/
                    node = dom("link");

                    node.setAttribute("rel", "stylesheet");
                    node.setAttribute("href", curFile);
                }
                else if(isjs(curFile)) {
          /*          node = dom("script", {
                        type: "test/javascript",
                        href: curFile
                    })*/
                    node = dom("script");

                    node.setAttribute("type", "text/javascript");
                    node.setAttribute("src", curFile);
                }

                node.setAttribute("file", basename(curFile));

                if(node) {
                    //  append node

                    //  get parent node

                    var parent;

                    parent = paw("#my-head");

                    //  may be delay
                    if(sign == "direct") {
                        parent.appendChild(node);
                    }
                    else {
                        _LOAD_QUEUE.push(node);
                    }
                }
            }
        }
    }

    return true;

    /*
    name:   _loadfile_onload
     */
    function _loadfile_onload() {

        var iNode = 0;
        for(;iNode < _LOAD_QUEUE.length; iNode++) {

            var node = _LOAD_QUEUE[iNode];

            var myHead = document.querySelector("#my-head");

            append(myHead, node);
        }
    }
}

/*
name:   injectJS
desc:   inject code
 */

function _InjectJS(codes) {

    codes = _2A(codes);

    var iCode = 0;

    for(;iCode < codes.length; iCode++) {

        //  get code
        var code = CODE_MAP[codes[iCode]];

        code = code || codes[iCode];

        var scriptNode = dom("script");

        scriptNode.type = "text/javascript";
        scriptNode.innerHTML = code;

        paw("#" + _head_id).appendChild(scriptNode);
    }

    return scriptNode;
}
/*
name:   _DRAW
desc:   draw a dom,  let our word colorful
 */

function _DRAW(roleNames, parent) {

    if(_s(roleNames)) {
        roleNames = [ roleNames ]
    }

    //  find parent

    if(parent) {
        parent = $(parent);
    }
    else {
        parent = $("#cosmos");
    }

    //  if cosmos not exist
    if(parent.length == 0) {
        parent =  $("#" + _my_box_id);
    }

    var iRole = 0;
    for(;iRole < roleNames.length; iRole++) {
        var sperm = DOM_PACK[roleNames[iRole]];

        //  let's imagine fly
        var role = $(sperm.struct);

        role = $(role);
        parent.append(role);

        //  active him
        if(sperm.behavior) {
            sperm.behavior.call(role);
        }

        if(sperm.autoOpen !== true) {
            role.hide();
        }

        //  connect keyboard

        var password = sperm.password;

        //  no key?
        if(_u(password)) {
            continue;
        }

        if(_s(password)) {
            password = [ password ];
        }
        var iWord = 0;

        for(;iWord < password.length; iWord++) {
            keys(password[iWord], _get_director(role));
        }
    }

    return role;

    /*
    name:   _get_diretor
     */

    function _get_director(role) {

        var _role = role;

        return role_director;
        /*
        name: role_direct
         */

        function role_director() {
            //  role is exciting！

            _role.toggle();
        }
    }
}

/*
name: _EXECUTE
desc:   execute
 */

function _EXECUTE(command) {

    var re;
    //  split command
    var commands = command.split(/\s|,/);


    _w1 = commands[0];
    _w2 = commands[1];
    _w3 = commands[2];

    _w4 = commands[3];
    _w5 = commands[4];
    _w6 = commands[5];

    _length = commands.length;
    _long = command;
    _remain = _long.slice(_w1.length + 1);

    //  special command
    if(resolution_command()) {
        return;
    }

    //  branch!

    var map1, map2, map3;

    map1 = COMMAND_MAP;

    map2 = map1[_w1];

    if(map2) {

        //  test
        if(_o(map2)) {

            //  command level 2
        }
        else {
            re = cliff(map2);
        }

    }
    else {

        re = cliff(command);
    }

    return re;

    /*
    name:   resolution_command
     */

    function resolution_command() {

        var iamowner = false;
        //  get color
        if(search(COLOR_LIST, _w1) !== false || _w1 == "Skin") {

            _w7 = _w1;
            _w1 = "Skin";
            iamowner = false;
        }

        return iamowner;
    }
}

/*
name:   _EMPLOYE
 */

function _EMPLOYE(worker_names) {

    //  some worker not ready
    if(! _BACKSTAGE_QUEST_ISSET) {
        spy(_employe_onload);

        _BACKSTAGE_QUEST_ISSET = true;
    }

    worker_names = _2A(worker_names);

    var iName = 0;
    var worker_name;

    for(;iName < worker_names.length; iName++) {
        worker_name = worker_names[iName];

        if(WORKER_FILES[worker_name]["dependPage"]) {

            //  wait
            _BACKSTAGE_WORKERS.push(worker_name);
            continue;
        }
        var worker = _get_worker(worker_name);

        window["_" + worker_name ] = worker;
    }

    return worker;

    /*  name;   _employe_onload */
    function _employe_onload() {

        //  get kep
        var workers = _BACKSTAGE_WORKERS;

        var i = 0;
        for(;i < workers.length; i++) {

            worker_name = workers[i];

            worker = _get_worker(worker_name);

            window["_" + worker_name] = worker;
        }
    }
}

/*  name:   _untitle  */

function _untitle() {

    //  create myhead
    var _head;

    _head = paw("#my-head");

    if(! _head) {
        _head = dom("head");
        _head.setAttribute("id", "my-head");

        paw("html")[0].appendChild(_head);
    }

    //  create boxes
    spy(function() {

        var my_box = paw("#" + _my_box_id);

        if(! my_box) {
            my_box = dom("div");

            my_box.id = _my_box_id;

            document.body.appendChild(my_box);
        }
    });
}

