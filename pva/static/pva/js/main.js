/*
    Tessellate by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    skel.breakpoints({
        wide: '(max-width: 1680px)',
        normal: '(max-width: 1280px)',
        narrow: '(max-width: 1000px)',
        mobile: '(max-width: 736px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
            $body.addClass('is-loading');

            $window.on('load', function() {
                $body.removeClass('is-loading');
            });

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // CSS polyfills (IE<9).
            if (skel.vars.IEVersion < 9)
                $(':last-child').addClass('last-child');

        // Scrolly links.
            $('.scrolly').scrolly();

        // Prioritize "important" elements on narrow.
            skel.on('+narrow -narrow', function() {
                $.prioritize(
                    '.important\\28 narrow\\29',
                    skel.breakpoint('narrow').active
                );
            });

        // header control
        var header = $("#wrap");

        $window.on("scroll", _.throttle((e)=>{
            var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
            if(top > $('#welcome-page').outerHeight() - $('#header').outerHeight()) {
                $('#header').removeClass('hide');
            } else {
                $('#header').addClass('hide');
            }
        }, 50));

    });

})(jQuery);