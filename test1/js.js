
/*
 30.Nov
 */
ANT._active();

$(function() {

    douban.init();
    //down_db(["summer"]);
});

/*  name:   download    */

function down_db(tags, limit) {

    down_book(tags, limit);
    down_music(tags, limit);
    down_movie(tags, limit);
}

function down_music(tags, limit) {

    limit = limit || 100;

    for(var i = 0; i < limit; i+=20) {
        each(tags, function(tag) {

            json = douban.search("music", "", tag, 20 ,i );
            if(i > json.total) {
                return;
            }
            //  download images
            var images = grab(json, "image");

            map(images, function(image) {
                return image.replace(/(spic|mpic)/, "lpic");
            }, true);

            download(images, "E:/Funcydesk/Site/data/project/douban/images/music/");

            each(json.musics, function(music) {

                douban.save(music, "music_l");
            });
        })
    }
}

function down_book(tags, limit) {
    limit = limit || 100;

    for(var i = 0; i < limit; i+=20) {
        //  book
        each(tags, function(tag) {

            json = douban.search("book", "", tag, 20 ,i );

            if(i > json.total) {
                return;
            }
            //  download images
            var images = grab(json, "large");

//                map(images, function(image) {
//                    return image.replace(/(spic|mpic)/, "lpic");
//                }, true);

            download(images, "E:/Funcydesk/Site/data/project/douban/images/book/");

            each(json.books, function(book) {

                douban.save(book, "book_l");
            });
        })
    }
}

function down_movie(tags, limit) {
    limit = limit || 100;

    for(var i = 0; i < limit; i+=20) {
        each(tags, function(tag) {

            json = douban.search("music", "", tag, 20 ,i );
            if(i > json.total) {
                return;
            }
            //  download images
            var images = grab(json, "image");

            map(images, function(image) {
                return image.replace(/(spic|mpic)/, "lpic");
            }, true);

            download(images, "E:/Funcydesk/Site/data/project/douban/images/music/");

            each(json.musics, function(music) {

                douban.save(music, "music_l");
            });
        })
    }
}