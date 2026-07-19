/**
 * theme-toggle.js — Dark / Light mode toggle
 * Persists preference in localStorage and respects OS setting.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'fs-theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Update all toggle button icons on the page
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
      btn.innerHTML = theme === DARK ? '☀️' : '🌙';
      btn.title = theme === DARK ? 'Switch to light mode' : 'Switch to dark mode';
    });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    var next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getPreferredTheme());

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });

  // React to OS theme changes (when no stored preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  });

  // Apply immediately (before DOMContentLoaded) to avoid flash
  applyTheme(getPreferredTheme());
})();
