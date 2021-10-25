import type { App } from 'vue';
import { create, NInput } from 'naive-ui';

const naive = create({
  components: [NInput]
});

export function setupNaive(app: App<Element>): void {
  app.use(naive);
}
