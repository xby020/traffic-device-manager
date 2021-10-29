<template>
  <n-tabs type="line">
    <n-tab-pane name="oasis"></n-tab-pane>
    <n-tab-pane name="the beatles"></n-tab-pane>
    <n-tab-pane name="jay chou"></n-tab-pane>
  </n-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NTabs, NTabPane } from 'naive-ui';

export default defineComponent({
  name: 'LayoutMenu',
  components: {
    NTabs,
    NTabPane
  },
  setup() {}
});
</script>
