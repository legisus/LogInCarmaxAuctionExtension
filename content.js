const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('dist/assets/main.js');
(document.head || document.documentElement).appendChild(script);