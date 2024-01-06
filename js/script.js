// бургер-меню
const burgerMenu = document.body.querySelector(".header__burger");
const headerNav = document.body.querySelector(".header__nav");
// получили в переменные бургер меню (саму кнопку) и навигацию (nav, в котором ul со всеми ссылками)

// при клике на кнопку бургер меню, вызывается функция, в которой переключается (добавляется или убирается) класс header__nav--active для навигационного меню (в css прописано, что при этом классе меню становится в исходное состояние left: 0%).
burgerMenu.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav--active");
    // также чтобы не прокручивалась страница во время открытого меню, для body задаётся overflow: hidden (для этого в css уже прописан класс overflow-hidden). при открытом меню нельзя скроллить страницу
    document.body.classList.toggle("overflow-hidden");
})





// картинки в режиме "просмотра"
const galleryImages = document.querySelectorAll('.gallery__img');
const galleryOverlay = document.querySelector('.gallery-overlay');
const overlayImg = document.querySelector('.gallery-overlay__img');
const overlayCloseIcon = document.querySelector('.gallery-overlay__close');
// получаем в переменные все изображения картинок в галлерее (записываются в массив), overlay (тёмное пространство вокруг увеличенной картинки), картинку внутри оверлея и кнопку закрытия в оверлее (крестик)

// так как в galleryImages у нас массив всех картинок (всех тэгов img), мы перебираем с помощью функции forEach. каждый элемент, который мы перебираем, называется image
galleryImages.forEach(image => {
    // при клике на один из image вызывается функция, внутри которой объект event (объект события, который хранит всю информацию о произошедшем клике. в том числе и сам элемент, на который клик произошёл)
    image.addEventListener('click', (event) => {
    // в переменную src мы получаем event.target (сам элемент, на который произошёл клик) и получаем из него значение, которое хранится в атрибуте src (то есть получаем 'images/gallery-6.jpg')
    const src = event.target.getAttribute('src');
    overlayImg.setAttribute('src', src);
    // для изображения, которое лежит внутри оверлея, задаём этот же src, чтобы это изображение и стало увеличенным
    galleryOverlay.classList.add('gallery-overlay--active');
    });
});

// на иконку закрытия овереля (крестик) навешиваем прослушку. при клике убираем класс gallery-overlay--active
overlayCloseIcon.addEventListener('click', () => {
    galleryOverlay.classList.remove('gallery-overlay--active');
})


