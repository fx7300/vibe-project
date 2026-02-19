(function() {
    'use strict';
    
    const STORAGE_KEY = 'exchange-rate-theme';
    
    function getTheme() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return (saved === 'light' || saved === 'dark') ? saved : 'dark';
        } catch (e) {
            return 'dark';
        }
    }
    
    function getWidgetConfig(symbol, theme) {
        const isLight = theme === 'light';
        return {
            autosize: true,
            symbol: symbol,
            interval: 'D',
            timezone: 'Asia/Seoul',
            theme: theme,
            style: '1',
            locale: 'ko',
            backgroundColor: isLight ? 'rgba(255, 255, 255, 1)' : 'rgba(26, 26, 26, 1)',
            gridColor: isLight ? 'rgba(229, 229, 229, 1)' : 'rgba(42, 42, 42, 1)',
            width: '100%',
            height: '500',
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            calendar: false,
            support_host: 'https://www.tradingview.com'
        };
    }
    
    function createWidget(container, symbol) {
        const theme = getTheme();
        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'tradingview-widget-container__widget';
        
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;
        script.textContent = JSON.stringify(getWidgetConfig(symbol, theme));
        
        container.innerHTML = '';
        container.appendChild(widgetDiv);
        container.appendChild(script);
    }
    
    function initWidgets() {
        const widgets = [
            { container: document.querySelector('[data-symbol="FX:USDKRW"]'), symbol: 'FX:USDKRW' },
            { container: document.querySelector('[data-symbol="FX_IDC:GBPKRW"]'), symbol: 'FX_IDC:GBPKRW' },
            { container: document.querySelector('[data-symbol="FX_IDC:JPYKRW"]'), symbol: 'FX_IDC:JPYKRW' },
            { container: document.querySelector('[data-symbol="FX_IDC:EURKRW"]'), symbol: 'FX_IDC:EURKRW' }
        ];
        
        widgets.forEach(function(item) {
            if (item.container) {
                createWidget(item.container, item.symbol);
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidgets);
    } else {
        initWidgets();
    }
    
    window.reloadWidgets = function() {
        initWidgets();
    };
})();
