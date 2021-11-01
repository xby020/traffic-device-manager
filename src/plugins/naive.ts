import type { App } from 'vue';
import { create, NConfigProvider } from 'naive-ui';

const naive = create({
  components: [NConfigProvider]
});

export function setupNaive(app: App<Element>): void {
  app.use(naive);
}
