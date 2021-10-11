/**
 * Created by sha on 11/18/13.
 */

/*
app:    gene
name:   COMMAND.js
 */

//  i hope no conflict.
/*
if command = "start app office"
then
    _long = "start app office,
    _w1 = start
    _w2 = app
    _w3 = office
    _length = 3
    _remain = app office
 */
var _long, _w1, _w2, _w3,_w4, _w5, _length, _remain;

var _w7, _w8, _w9;  //  for temporary use
var COMMAND_MAP =
{
    "close": window.close,

    //  interesting!
    "~" : function() {

        var set;
        var path;

        var isXPath = false;
        if(_w2 == "x") {
            path = "! ";

            if(_w3) {
                path += _w3;
            }

            if(_w4) {
                path += " " + _w4;
            }

            set = paw(path);
            isXPath = true;
        }
        else {
            set = $(_remain);
        }

        if(ID_Inspector) {

            if(_w2 == "stop") {
                _Inspector.stop();
            }
            else {
                _Inspector.start(set);
            }
        }
        else
        {
            var my_class = "God-Selector";
            //  selector nodes

            $("." + my_class).removeClass(my_class);

            if(_length > 1) {

                set.addClass(my_class);
                //  display info to printer
                log("get " + set.length, "info");
            }
        }
    },

    "Skin": function() {

        var style_order = [ "color", "background", "font-size" ];
        var _o1 = style_order[0];
        var _o2 = style_order[1];
        var _o3 = style_order[2];

        //  get data
        var _data = _SKIN_DATA;
        var _is = _data["isset"];

        if(_length == 1 && _w7 == "Skin") {

            if(_is) {
                _w1 = _data[_o1];
                _w2 = _data[_o2];
                _w3 = _data[_o3];

                _set_skin();
            }
        }
        else {
            _w1 = _w7;
            _set_skin();
        }

        /*
        name:_set_skin
         */
        function _set_skin() {

            if(! _is) {
                _data[_o1] = $("body").css(_o1);

                _data["isset"] = true;
            }
            if(_w1) {
                $("body").css(_o1, _w1);
            }

            //  background
            if(! _is) {
                _data[_o2] = $("body").css(_o2);
            }
            if(_w2) {
                $("body").css(_o2, _w2);
            }

            //  font-size
            if(! _is) {
                _data[_o3] = $("body").css(_o3);
            }
            if(_w3) {
                $("body").css(_o3, _w3);
            }
        }
    },

    "js": function(){

        // purpose: load javascript files to page

        var files = _remain.split(/ |, /);

        each(files, function(file) {

            if(file[0] == "#") {

                file = file.replace("#", "E:/Nature/Lab/client/February/snippet/");

                if(! file.match(/\.js$/)) {
                    file += ".js";
                }
            }

            file = dir2url(file);
            script(file).depend(Head);
        });

        return true;
    }
}
