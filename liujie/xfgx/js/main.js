(function($, window, undefined) {
    $(function() {
        var new_scroll_position = 0;
        var last_scroll_position;
        var header = document.getElementById("header");

        // window.addEventListener('scroll', function(e) {
        //     last_scroll_position = window.scrollY;
        //
        //     var height = (document.URL=="http://localhost:8000/aboutUs.html") ? 389 : 766;
        //
        //     // 向下滚动
        //     if ( last_scroll_position > height) {
        //         header.classList.remove("slideDown");
        //         header.classList.add("slideUp");
        //
        //         // 向上滚动
        //     } else if (height > last_scroll_position) {
        //         header.classList.remove("slideUp");
        //         header.classList.add("slideDown");
        //     }
        //
        //     new_scroll_position = last_scroll_position;
        // });

        var posterTvGrid = posterTvGrid && new posterTvGrid(
            'posterTvGrid',{className: "posterTvGrid"},
            [
                {"img":"img\/main\/icon_01.png","title":"Lorem ipsum dolor sit amet","url":"#"},
                {"img":"img\/main\/icon_03.png","title":"Lorem ipsum dolor sit amet","url":"#"},
                {"img":"img\/main\/icon_04.png","title":"Lorem ipsum dolor sit amet","url":"#"},
                {"img":"img\/main\/icon_img2.png","title":"Lorem ipsum dolor sit amet","url":"#"}
            ]
        );
        lazySizes.init(); // image lazy load
    });

}(jQuery, window));