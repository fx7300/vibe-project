(function() {
    'use strict';
    
    const STORAGE_KEY = 'exchange-rate-theme';

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
        } catch (e) {
            console.error('Failed to save theme:', e);
        }
    }

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
        updateToggleButton(isLight);
        
        if (typeof window.reloadWidgets === 'function') {
            window.reloadWidgets();
        }
    }

    function updateToggleButton(isLight) {
        const btn = document.getElementById('theme-toggle');
        const icon = btn && btn.querySelector('.theme-icon');
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
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        setStoredTheme(next);
        applyTheme(next);
    }

    function init() {
        const saved = getStoredTheme();
        const theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
        setStoredTheme(theme);
        applyTheme(theme);

        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
