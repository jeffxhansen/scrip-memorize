document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('#demo-carousel');
    var options = {fullWidth: true, indicators: true, noWrap: true, padding: -100, duration: 100}
    var instances = M.Carousel.init(elems, options);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('#card-carousel');
    var options = { fullWidth: true, indicators: true, noWrap: true }
    var instances = M.Carousel.init(elems, options);
});
