$('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		speed: 500,//スライドのスピード。初期値は300。
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		centerMode: true,//要素を中央ぞろえにする
		variableWidth: true,//幅の違う画像の高さを揃えて表示
		dots: true,//下部ドットナビゲーションの表示
	});

document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video');
    if (video) {
        // 動画の再生とミュート設定
        video.muted = true;
        video.play().catch(error => {
            console.error('Video autoplay failed:', error);
        });

window.addEventListener('resize', () => {
    const video = document.querySelector('.bg-video');
    if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
        // スマホの縦画面
        video.style.objectFit = 'contain';
        video.style.backgroundColor = '#000';
    } else {
        // その他の画面
        video.style.objectFit = 'cover';
        video.style.backgroundColor = 'transparent';
    }
});

document.addEventListener('DOMContentLoaded', function () {
            fetch('main.json')
                .then(response => response.json())
                .then(data => {
                    const homeSection = document.getElementById('home');
                    homeSection.style.backgroundImage = `url(${data.main_image.src})`;
                    homeSection.style.backgroundSize = 'cover';
                    homeSection.style.backgroundPosition = 'center top';
                    homeSection.style.backgroundRepeat = 'no-repeat';
                })
                .catch(error => console.error('Error loading JSON:', error));
        });

function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        function openLink(url) {
            window.open(url, '_blank');
        }
