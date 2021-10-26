import type { App } from 'vue';
import { create, NConfigProvider, NInput } from 'naive-ui';

const naive = create({
  components: [NConfigProvider, NInput]
});

export function setupNaive(app: App<Element>): void {
  app.use(naive);
}
