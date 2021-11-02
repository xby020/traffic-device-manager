<template>
  <div class="w-full h-full flex flex-row justify-between">
    <!-- left -->
    <div class="flex flex-row">
      <!-- logo -->
      <n-button text class="w-272px">
        <span class="font-bold tracking-wider text-purple-500 text-2xl"
          >华友测试平台</span
        >
      </n-button>

      <!-- menu -->
      <layout-menu class="w-1/2"></layout-menu>
    </div>
    <!-- right -->
    <div class="flex justify-end content-center items-center">
      <!-- Toolbox -->
      <layout-toolbox class="h-full"></layout-toolbox>
      <!-- user -->
      <n-avatar
        class="mx-4"
        round
        :size="48"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { NButton, NAvatar } from 'naive-ui';
import { defineComponent } from 'vue-demi';
import LayoutMenu from './components/Menu/index.vue';
import LayoutToolbox from './components/Toolbox/index.vue';

export default defineComponent({
  name: 'LayoutHeader',
  components: {
    LayoutMenu,
    LayoutToolbox,
    NButton,
    NAvatar
  },
  data() {
    return {
      darkMode: false
    };
  },
  setup() {}
});
</script>
