// Import the specific functions from your modules folder
import { initNavigation } from './modules/navigation.js';

// Initialize Global Features
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    
    // Last Modified Logic (Repetition for every page)
    const lastMod = document.querySelector('#lastModified');
    if (lastMod) lastMod.textContent = document.lastModified;

    // Only load the directory engine if we are on the Specialists page
    if (document.querySelector('#directory-grid')) {
        import('./modules/directory.js').then(module => {
            module.initDirectory();
        });
    }
});