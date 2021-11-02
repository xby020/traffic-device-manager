<template>
  <div class="flex flex-row items-center">
    <n-button circle class="mx-4">
      <template #icon>
        <icon-park type="dark-mode"></icon-park>
      </template>
    </n-button>
    <n-switch v-model:value="themeDark">
      <template #checked>
        <icon-park type="dark-mode"></icon-park>
      </template>
      <template #unchecked>
        <icon-park type="sun"></icon-park>
      </template>
    </n-switch>
  </div>
</template>

<script lang="ts">
import { useThemeStore } from '@/store/modules/theme';
import { defineComponent, toRef } from 'vue-demi';
import { NButton, NSwitch } from 'naive-ui';
import { IconPark } from '@icon-park/vue-next/es/all';
export default defineComponent({
  name: 'LayoutToolbox',
  components: {
    IconPark,
    NButton,
    NSwitch
  },
  setup() {
    // 获取当前theme设置
    const themeStore = useThemeStore();
    // 响应式更新theme
    const themeDark = toRef(themeStore, 'settingDark');

    return {
      themeDark
    };
  }
});
</script>

<style scoped></style>
