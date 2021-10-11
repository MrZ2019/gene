/*
 douban.js

 */

;(function() {

    douban = new Object();

    var cat_map =
    {
        book:  "books",
        music: "musics",
        movie:"subjects"
    };

    var _data =
    {
        database: "douban",
        book: null,
        music: null,
        movie: null,
        imgDir: "/data/project/douban/images/",
        api: "/gear/api/douban/get.php"
    };

    var _pack =
    {
        init:   function(api, _opts, my_data) {

            var opts =
            {
                initDatabase: false
            };

            setup(opts, _opts);

            if(exist(api)) {
                _data.api = api;
            }

            //  2:  init database

            if(opts.initDatabase == true) {

                //  create database

                output(_mysql.create("douban"));

                output(_mysql.create("book_l",
                    {
                        did:    "i u",
                        origin_title: "v64",
                        title: "v64",
                        author:"v64",
                        author_intro: "t",
                        pubdate: "v32",
                        publisher: "v32",
                        pages: "i",
                        price: "i",
                        catalog: "t",
                        isbn: "i z",
                        image: "v64",
                        summary: "t",
                        tags: "v128",
                        translator: "v32"
                    },"", _data.database));

                output(_mysql.create("music_l",
                    {
                        did:    "i u",
                        title: "v64",
                        singer:"v64",
                        media: "v16",
                        pubdate: "v32",
                        publisher: "v32",
                        tracks: "t",
                        image: "v64",
                        tags: "v128",
                    },"", _data.database));

                output(_mysql.create("movie_l",
                    {
                        did:    "i u",
                        origin_title: "v64",
                        title: "v64",
                        year: "v8",
                        image: "v64",
                    },"", _data.database));
            }

            _data.book_l = _mysql.knit("book_l", "douban");
            _data.music_l = _mysql.knit("music_l", "douban");
            _data.movie_l = _mysql.knit("movie_l", "douban");

            //  3   copy
            copy(my_data, _data);
        },

        save:   function(vary, cat) {

            cat = cat || "book_l";

            var values;

            var tags = [];

            if(exist(vary.tags)) {
                _array.each(vary.tags, function(val) {
                    tags.push(val.title);
                });

                tags = tags.join(",");
            }

            vary.did = vary.id;

            if(cat == "movie_l") {
                vary.image = vary.images.large;
            }

            vary.image = reg1(vary.image, /\w+\.\w+$/);
            switch(cat) {
                case "book_l":
                {
                    vary.price = parseInt(vary.price);

                    if(isNaN(vary.price)) {
                        vary.price = 0;
                    }

                    values =
                        [
                            vary.did, vary.origin_title, vary.title, vary.author, vary.author_intro, vary.pubdate, vary.publisher,
                            vary.pages, vary.price, vary.catalog, vary.isbn13, vary.image, vary.summary, tags, vary.translator
                        ]
                }
                    break;

                case "music_l":
                {
                    values =
                        [
                            vary.did, vary.attrs.title, vary.attrs.singer, vary.attrs.media, vary.attrs.pubdate, vary.attrs.publisher, vary.attrs.tracks, vary.image, tags
                        ];
                }
                    break;

                case "movie_l":
                {
                    values =
                        [
                            vary.did, vary.original_title, vary.title, vary.year, vary.image
                        ];
                }
                    break;
            }

            output(_data[cat].insert(values));
        },

        /*
         name:   get a item by id
         */
        get:    function(id, cat) {

        },

        search: function(cat, q, tag, count, start) {

            cat = cat || "music";

            var url = format("http://api.douban.com/v2/$1/search?q=$2&tag=$3&count=$4&start=$5", cat, q, tag, count, start);

            return http(url, null);
        }
        ,
        /*
         name:   read
         */
        read:   function(id, cat) {

            cat = cat || "book_l";

            var sql = format("SELECT * FROM $1 WHERE id = $2;", cat, id);

            return _mysql.go(sql, _data.database);
        },

        /*
         name:   find
         */
        find:   function(keyword, cat, column) {

            column = column || "title";

            cat = cat || "book_l";

            var sql = format("SELECT * FROM $1 WHERE `$2` LIKE '%$3%';",  cat, column, keyword);

            return _mysql.go(sql, _data.database);

        },

        /*
         name:   addImgDir
         */
        getImages:  function(json) {

            var imgs = grab(json, "image");

            map(imgs, function(val) {
                return _data.imgDir + val;
            }, true);

            return imgs;
        }
    };

    copy(_pack, douban);
    douban.data = _data;
})(true);