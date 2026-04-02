export function updateFooter() {
    const year = document.querySelector('#currentYear');
    const modified = document.querySelector('#lastModified');
    if (year) year.textContent = new Date().getFullYear();
    if (modified) modified.textContent = document.lastModified;
}

export function initNavigation() {
    const menuBtn = document.querySelector('#menu-button');
    const nav = document.querySelector('#nav-list');
    
    menuBtn?.addEventListener('click', () => {
        const expanded = nav.classList.toggle('show-nav');
        menuBtn.setAttribute('aria-expanded', expanded);
        menuBtn.textContent = expanded ? '✕' : '☰';
    });
}