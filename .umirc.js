import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/layout/index' }],
});
//# sourceMappingURL=.umirc.js.map
