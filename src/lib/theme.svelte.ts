type Theme = 'light' | 'dark';

function createTheme() {
  let theme = $state<Theme>('dark');

  function applyTheme(newTheme: Theme) {
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', newTheme);
    }
  }

  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    theme = initialTheme;
    applyTheme(initialTheme);
  }

  function toggle() {
    theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
  }

  return {
    get current() {
      return theme;
    },
    toggle,
  };
}

export const theme = createTheme();
