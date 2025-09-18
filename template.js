document.addEventListener("DOMContentLoaded", () => {
    console.log("MG Template loaded");

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
    function initServers() {
        const servers = document.querySelectorAll('.server');
        const serverContents = document.querySelectorAll('.server-content');

        console.log(`Found ${servers.length} servers and ${serverContents.length} server contents`);

        if (servers.length === 0 || serverContents.length === 0) {
            console.error("No servers or server contents found");
            return;
        }

        // Show only the first server content by default
        serverContents.forEach((sc, idx) => {
            sc.style.display = idx === 0 ? 'block' : 'none';
        });

        servers.forEach((server, index) => {
            server.addEventListener('click', () => {
                console.log(`Server ${index} clicked`);

                // Highlight the clicked server
                servers.forEach(s => s.classList.remove('active'));
                server.classList.add('active');

                // Show the correct iframe
                serverContents.forEach((sc, i) => {
                    sc.style.display = i === index ? 'block' : 'none';
                });
            });
        });
    }

    // Initialize servers with a small delay to ensure DOM is fully ready
    setTimeout(initServers, 100);

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