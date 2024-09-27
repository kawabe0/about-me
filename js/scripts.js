document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
  })
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100; // 100%の幅を基準にオフセット計算
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// 自動スライドの設定（任意）
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 5000); // 5秒ごとにスライド切替