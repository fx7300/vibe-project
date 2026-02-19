(function () {
    var STORAGE_KEY = 'vibe-coder-theme';

    function getStoredTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function setStoredTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {}
    }

    function applyTheme(theme) {
        var isLight = theme === 'light';
        document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
        updateToggleButton(isLight);
    }

    function updateToggleButton(isLight) {
        var btn = document.getElementById('theme-toggle');
        var icon = btn && btn.querySelector('.theme-icon');
        if (!btn || !icon) return;
        if (isLight) {
            icon.textContent = '🌙';
            btn.setAttribute('aria-label', '다크 모드로 전환');
            btn.setAttribute('title', '다크 모드로 전환');
        } else {
            icon.textContent = '☀️';
            btn.setAttribute('aria-label', '라이트 모드로 전환');
            btn.setAttribute('title', '라이트 모드로 전환');
        }
    }

    function toggleTheme() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'light' ? 'dark' : 'light';
        setStoredTheme(next);
        applyTheme(next);
    }

    (function init() {
        var saved = getStoredTheme();
        var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
        setStoredTheme(theme);
        applyTheme(theme);

        var btn = document.getElementById('theme-toggle');
        if (btn) btn.addEventListener('click', toggleTheme);
    })();
})();
