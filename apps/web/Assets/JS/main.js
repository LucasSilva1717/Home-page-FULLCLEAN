document.addEventListener("DOMContentLoaded", () => {

    const dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownMenu) {
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.style.display = 'none';
                setTimeout(() => {
                    dropdownMenu.style.display = '';
                }, 100);
            });
        });
    }

    const sliderInput = document.getElementById('slider-input');
    const beforeImage = document.getElementById('before-image');
    const sliderLine = document.getElementById('slider-line');

    if (sliderInput && beforeImage && sliderLine) {
        sliderInput.addEventListener('input', (e) => {
            const value = e.target.value;
            sliderLine.style.left = `${value}%`;
            beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        });
    }

    const sliderInputColchao = document.getElementById('slider-input-colchao');
    const beforeImageColchao = document.getElementById('before-image-colchao');
    const sliderLineColchao = document.getElementById('slider-line-colchao');

    if (sliderInputColchao && beforeImageColchao && sliderLineColchao) {
        sliderInputColchao.addEventListener('input', (e) => {
            const value = e.target.value;
            sliderLineColchao.style.left = `${value}%`;
            beforeImageColchao.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        });
    }

    const trackEstofados = document.getElementById('carousel-track');
    const prevEstofados = document.getElementById('carousel-prev');
    const nextEstofados = document.getElementById('carousel-next');

    if (trackEstofados && prevEstofados && nextEstofados) {
        const getScrollAmount = () => trackEstofados.clientWidth;
        nextEstofados.addEventListener('click', () => { trackEstofados.scrollLeft += getScrollAmount(); });
        prevEstofados.addEventListener('click', () => { trackEstofados.scrollLeft -= getScrollAmount(); });
    }

    const trackImper = document.getElementById('carousel-track-imper');
    const prevImper = document.getElementById('carousel-prev-imper');
    const nextImper = document.getElementById('carousel-next-imper');

    if (trackImper && prevImper && nextImper) {
        const getScrollAmount = () => trackImper.clientWidth;
        nextImper.addEventListener('click', () => { trackImper.scrollLeft += getScrollAmount(); });
        prevImper.addEventListener('click', () => { trackImper.scrollLeft -= getScrollAmount(); });
    }

    const trackColchao = document.getElementById('carousel-track-colchao');
    const prevColchao = document.getElementById('carousel-prev-colchao');
    const nextColchao = document.getElementById('carousel-next-colchao');

    if (trackColchao && prevColchao && nextColchao) {
        const getScrollAmount = () => trackColchao.clientWidth;
        nextColchao.addEventListener('click', () => { trackColchao.scrollLeft += getScrollAmount(); });
        prevColchao.addEventListener('click', () => { trackColchao.scrollLeft -= getScrollAmount(); });
    }

});