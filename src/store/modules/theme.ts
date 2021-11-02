import { defineStore } from 'pinia';
import themeColor from '@/settings/theme';
import type { GlobalThemeOverrides } from 'naive-ui';
import { useOsTheme } from 'naive-ui';
import { lighten } from '@/util';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      settingDark: false,
      usingOsTheme: false
    };
  },
  getters: {
    getDark(): boolean {
      if (this.usingOsTheme) {
        const osTheme = useOsTheme();
        return osTheme.value === 'dark';
      } else {
        return this.settingDark;
      }
    },
    getUsingOsTheme(): boolean {
      return this.usingOsTheme;
    },
    /**
     * @description 返回自定义主题设置
     *
     * @return {GlobalThemeOverrides} 自定义主题
     */
    getThemeOverrides() {
      const tc = this.getDark ? themeColor.dark : themeColor.light;
      const themeOverrides: GlobalThemeOverrides = {
        common: {
          primaryColor: tc.primary,
          primaryColorHover: lighten(tc.primary, 6),
          primaryColorPressed: lighten(tc.primary, 6)
        },
        Button: {
          textColor: tc.primary
        },
        Select: {
          peers: {
            InternalSelection: {
              textColor: tc.primary
            }
          }
        }
      };

      return themeOverrides;
    }
  },
  actions: {}
});
