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
      <n-button circle class="mx-4">
        <template #icon>
          <icon-park type="dark-mode"></icon-park>
        </template>
      </n-button>
      <n-switch>
        <template #checked>
          <icon-park type="sun"></icon-park>
        </template>
        <template #unchecked>
          <icon-park type="dark-mode"></icon-park>
        </template>
      </n-switch>

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
import { NButton, NAvatar, NSwitch } from 'naive-ui';
import { IconPark } from '@icon-park/vue-next/es/all';
import { computed, defineComponent } from 'vue-demi';
import LayoutMenu from './components/Menu/index.vue';
import { useThemeStore } from '@/store/modules/theme';
export default defineComponent({
  name: 'LayoutHeader',
  components: {
    IconPark,
    LayoutMenu,
    NButton,
    NAvatar,
    NSwitch
  },
  data() {
    return {
      darkMode: false
    };
  },
  setup() {
    const isDark = computed(() => {
      const themeStore = useThemeStore();
      return themeStore.getDark;
    });
    return { isDark };
  }
});
</script>
