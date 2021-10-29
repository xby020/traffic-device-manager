<template>
  <div class="w-full h-full flex flex-row flex-nowarp">
    <!-- logo -->
    <n-button text class="">
      <span class="font-bold tracking-wider text-purple-500 text-2xl"
        >华友测试平台</span
      >
    </n-button>

    <!-- menu -->
    <layout-menu class="w-1/2"></layout-menu>

    <!-- Toolbox -->
    <n-button circle class="">
      <template #icon>
        <icon-park type="mail-review"></icon-park>
      </template>
    </n-button>

    <!-- user -->
    <n-button circle class="">
      <template #icon>
        <icon-park type="user"></icon-park>
      </template>
    </n-button>
  </div>
</template>

<script lang="ts">
import { NButton } from 'naive-ui';
import { IconPark } from '@icon-park/vue-next/es/all';
import { defineComponent } from 'vue-demi';
import LayoutMenu from './components/Menu/index.vue';
export default defineComponent({
  name: 'LayoutHeader',
  components: {
    IconPark,
    LayoutMenu,
    NButton
  }
});
</script>
