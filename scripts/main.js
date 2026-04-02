import { updateFooter, initNavigation } from './modules/utils.js';

// Global Initializations
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    initNavigation();

    // Directory Page Specific Logic
    if (document.querySelector('#directory-grid')) {
        import('./modules/directory.js').then(module => {
            module.initDirectory();
        });
    }

    // Join Page Specific Logic (Form Timestamp)
    const timestampField = document.querySelector('#timestamp');
    if (timestampField) {
        timestampField.value = Date.now();
    }
});