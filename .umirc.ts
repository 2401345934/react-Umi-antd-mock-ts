import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/layout/index' },
    // { path: '/', component: '@/pages/index' },
  ],
});
