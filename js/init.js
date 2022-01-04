document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('#card-carousel');
    var options = { fullWidth: true, indicators: true, noWrap: true, padding: -80, duration: 50 }
    var instances = M.Carousel.init(elems, options);
});
