import type { App } from 'vue';
import { create, NConfigProvider, NInput } from 'naive-ui';

const naive = create({
  components: [NConfigProvider, NInput]
});

export function setupNaive(app: App<Element>): void {
  app.use(naive);
}

// 自定义主题颜色
// const themeColor = '#606bc0';
/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
export const themeOverrides = {};
