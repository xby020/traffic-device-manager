import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      isDark: false,
      usingOsTheme: false
    };
  },
  getters: {
    getTheme(): boolean {
      return this.isDark;
    },
    getUsingOsTheme(): boolean {
      return this.usingOsTheme;
    }
  },
  actions: {}
});
