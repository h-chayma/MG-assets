document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
       Tabs
    =============================== */
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.dataset.tab;

            // Reset all
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // Activate current
            this.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    /* ===============================
       Servers
    =============================== */
    document.querySelectorAll('.server').forEach(server => {
        server.addEventListener('click', function () {
            document.querySelectorAll('.server').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* ===============================
       Smooth Scroll
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ===============================
       Season Selector (Series page)
    =============================== */
    document.querySelectorAll('.season-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.season-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const seasonNumber = this.dataset.season;
            const titleEl = document.querySelector('.section-title');
            if (titleEl) {
                let seasonName = '';
                switch (seasonNumber) {
                    case '1': seasonName = 'الأول'; break;
                    case '2': seasonName = 'الثاني'; break;
                    case '3': seasonName = 'الثالث'; break;
                    default: seasonName = `#${seasonNumber}`;
                }
                titleEl.textContent = `حلقات الموسم ${seasonName}`;
            }
        });
    });

    /* ===============================
       Episode Cards
    =============================== */
    document.querySelectorAll('.episode-card').forEach(card => {
        card.addEventListener('click', function () {
            const epNum = this.querySelector('.episode-number')?.textContent || '';
            if (epNum) {
                alert('You clicked on episode ' + epNum);
            }
        });
    });

    /* ===============================
       Episode Navigation
    =============================== */
    document.querySelectorAll('.nav-btn:not(.disabled)').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Navigating to next episode...');
        });
    });
});