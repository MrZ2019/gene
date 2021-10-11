
/*
 30.Nov
 */

$(function() {

    imgs = $("body").gallery();
});

/*
plugin: gallery
 */
;(function($) {

    //  beautiful!

    var opts;
    var gallery;
    var images;

    $.fn.gallery = function(_opts) {

        opts = $.extend({}, $.fn.gallery, _opts);

        //  find images

        images = $(this).find("img");

        _draw_gallery();

        return images;
    }

    //  _onload
    $(function() {


    });
    /*
    name:   _draw_gallery
     */
    function _draw_gallery() {

        gallery = $("<div></div>");

        gallery[0].id = _defopts.id;

        $("body").append(gallery);

        //  draw images
        images.each(function _each_images(index, image) {

            var thumb = $("<img>");

            thumb[0].src = image.src;

            thumb.appendTo(gallery);
        });
    }

    var _defopts =
    {
        minWidth: 200,
        maxWidth: 2000,
        minHeight: 200,
        maxHeight: 3000,

        width: 200,
        id: "my-gallery"
    };

     $.fn.gallery.options =_defopts ;
})(jQuery)