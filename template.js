
document.addEventListener('DOMContentLoaded', function () {
    // Tab functionality
    const tabs = document.querySelectorAll('.mg-tab');
    const tabContents = document.querySelectorAll('.mg-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Server selection
    const servers = document.querySelectorAll('.mg-server');

    servers.forEach(server => {
        server.addEventListener('click', function () {
            servers.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Season selection
    const seasons = document.querySelectorAll('.mg-season');

    seasons?.forEach(season => {
        season.addEventListener('click', function () {
            seasons.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll
    const scrollLinks = document.querySelectorAll('a[href^="#mg-"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                if (targetId === '#mg-download') {
                    document.querySelector('.mg-tab[data-tab="mg-download"]')?.click();
                } else if (targetId === '#mg-episodes') {
                    document.querySelector('.mg-tab[data-tab="mg-episodes"]')?.click();
                }
            }
        });
    });

    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.getAttribute('src');
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);

        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.classList.add('lazyload');
            img.setAttribute('data-src', img.getAttribute('src'));
            img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        });
    }
});
