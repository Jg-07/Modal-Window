var modal = document.querySelectorAll(".but");
var modal2 = document.querySelector(".shadow");
var modal3 = document.querySelector(".modalc");
var modal4 = document.querySelector(".modalcloses");
var imageA = document.querySelector(".ModImage");
for (let index = 0; index < modal.length; index++) {
    modal[index].addEventListener('click', function () {
        modal3.classList.remove('hiden');
        modal2.classList.remove('hiden');
    });
}
var closeModel = function () {
    modal3.classList.add('hiden');
    modal2.classList.add('hiden');
}
modal4.addEventListener('click', closeModel);
modal2.addEventListener('click', closeModel);
document.addEventListener("keydown", function (e) {
    if (e.key === 'Escape' && !modal2.classList.contains('hiden') && !modal3.classList.contains('hiden')) {
        closeModel();
    }
});

imageA.addEventListener("click", function () {
    imageA.classList.add('timeline');
});




