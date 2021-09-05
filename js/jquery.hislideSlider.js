(function () {
    var sliderMain = function (ele, options) {
        var states =
            ((window.innerWidth <= 700)) ? [
                { $zIndex: 1, width: 120, height: 150, top: 50, left: '-100%', $opacity: 0.2, transform: `rotate(-15deg)` },
                { $zIndex: 2, width: 130, height: 170, top: 60, left: -10, $opacity: 0.4, transform: `rotate(-10deg)` },
                { $zIndex: 3, width: 170, height: 218, top: 68, left: 5, $opacity: 0.7, transform: `rotate(-5deg)` },
                { $zIndex: 4, width: 224, height: 288, top: 70, left: 45, $opacity: 1, transform: `rotate(0deg)` },
                { $zIndex: 3, width: 170, height: 218, top: 68, left: 150, $opacity: 0.7, transform: `rotate(5deg)` },
                { $zIndex: 2, width: 130, height: 170, top: 60, left: 200, $opacity: 0.4, transform: `rotate(10deg)` },
                { $zIndex: 1, width: 11, height: 150, top: 50, left: 25, $opacity: 0.2, transform: `rotate(15deg)` }
            ] : [
                { $zIndex: 1, width: 120, height: 150, top: 69, left: -100, $opacity: 0.2, transform: `rotate(-15deg)` },
                { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4, transform: `rotate(-10deg)` },
                { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7, transform: `rotate(-5deg)` },
                { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1, transform: `rotate(0deg)` },
                { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7, transform: `rotate(5deg)` },
                { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4, transform: `rotate(10deg)` },
                { $zIndex: 1, width: 120, height: 150, top: 69, left: 740, $opacity: 0.2, transform: `rotate(15deg)` }
            ];
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 2000,
        };
        $.extend(true, setting, options);
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function () {
            next();
        });
        $ele.find('.hi-prev').on('click', function () {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function () {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function () {
            autoPlay();
        });

        move();
        autoPlay();


        function move() {
            $lis.each(function (index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css({ transform: state.transform, opacity: state.$opacity })
            });
        }

        function next() {

            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }

    $.fn.hiSliderMain = function (options) {
        $(this).each(function (index, ele) {
            sliderMain(ele, options);
        });

        return this;
    }
})(jQuery);
