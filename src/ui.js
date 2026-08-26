// ui.js — theme and sidebar helpers
export function createUiController() {
  function applyTheme(t, themeToggle) {
    document.documentElement.setAttribute('data-theme', t);
    if (themeToggle) themeToggle.textContent = t === 'dark' ? '🌙' : '☀️';
  }

  function setSidebarCollapsed(collapsed) {
    document.documentElement.classList.toggle('sidebar-collapsed', collapsed);
    localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
  }

  return { applyTheme, setSidebarCollapsed };
}
