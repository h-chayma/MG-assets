document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
       Helper Functions
    =============================== */
    const setActiveClass = (elements, activeEl, className = 'active') => {
        elements.forEach(el => el.classList.remove(className));
        activeEl.classList.add(className);
    };

    /* ===============================
       Tabs
    =============================== */
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            setActiveClass(tabs, tab);
            tabContents.forEach(c => c.classList.remove('active'));
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    /* ===============================
       Servers
    =============================== */
    const servers = document.querySelectorAll('.server');
    const serverContents = document.querySelectorAll('.server-content');

    servers.forEach((server, index) => {
        server.addEventListener('click', () => {
            // Set active class on server buttons
            servers.forEach(s => s.classList.remove('active'));
            server.classList.add('active');

            // Show the correct iframe
            serverContents.forEach(sc => sc.classList.remove('active'));
            serverContents[index].classList.add('active');
        });
    });

    /* ===============================
       Smooth Scroll
    =============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ===============================
       Season Selector (Series page)
    =============================== */
    const seasonBtns = document.querySelectorAll('.season-btn');
    seasonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveClass(seasonBtns, btn);

            const seasonNumber = btn.dataset.season;
            const titleEl = document.querySelector('.section-title');
            if (titleEl) {
                const seasonNames = {
                    1: 'الأول',
                    2: 'الثاني',
                    3: 'الثالث',
                };
                const seasonName = seasonNames[seasonNumber] || `#${seasonNumber}`;
                titleEl.textContent = `حلقات الموسم ${seasonName}`;
            }
        });
    });

    /* ===============================
       Episode Cards
    =============================== */
    document.querySelectorAll('.episode-card').forEach(card => {
        card.addEventListener('click', () => {
            const link = card.getAttribute('href');
            if (link) {
                window.location.href = link;
            }
        });
    });

    /* ===============================
       Episode Navigation
    =============================== */
    document.querySelectorAll('.nav-btn:not(.disabled)').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetUrl = btn.getAttribute('href');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });
});