<template>
  <n-tabs type="bar" pane-style="padding-top:0" size="medium">
    <n-tab-pane name="1">
      <template #tab>
        <div class="flex flex-col justify-center items-center w-50px">
          <icon-park type="mail-review" size="32px"></icon-park>
          <span>主页</span>
        </div>
      </template>
    </n-tab-pane>

    <n-tab-pane name="2">
      <template #tab>
        <div class="flex flex-col justify-center items-center w-50px">
          <icon-park type="map-distance" size="32px"></icon-park>
          <span>资料</span>
        </div>
      </template>
    </n-tab-pane>

    <n-tab-pane name="3">
      <template #tab>
        <div class="flex flex-col justify-center items-center w-50px">
          <icon-park type="slide" size="32px"></icon-park>
          <span>工具</span>
        </div>
      </template>
    </n-tab-pane>
  </n-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NTabs, NTabPane } from 'naive-ui';
import { IconPark } from '@icon-park/vue-next/es/all';

export default defineComponent({
  name: 'LayoutMenu',
  components: {
    IconPark,
    NTabs,
    NTabPane
  },
  setup() {}
});
</script>

<style></style>
