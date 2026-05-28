import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="relative h-[18px] w-[32px] rounded-full transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#F8F7F2' : '#0E0E0E',
      }}
    >
      <span
        className="absolute top-[2px] h-[14px] w-[14px] rounded-full transition-transform duration-300"
        style={{
          backgroundColor: isDark ? '#0E0E0E' : '#E8B547',
          transform: isDark ? 'translateX(16px)' : 'translateX(2px)',
        }}
      />
    </button>
  );
}
