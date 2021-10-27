<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <Application>
      <router-view></router-view>
    </Application>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { dateZhCN, zhCN, darkTheme, useOsTheme } from 'naive-ui';
import { themeOverrides } from '@/plugins/naive';
import { useThemeStore } from '@/store/modules/theme';
import Application from '@/components/Application.vue';

const themeStore = useThemeStore();
const theme = computed(() => {
  const isDark = themeStore.isDark;
  const usingOsTheme = themeStore.usingOsTheme;

  if (usingOsTheme) {
    // 获取OS主题设置
    const osThemeRef = useOsTheme();
    return osThemeRef.value === 'dark' ? darkTheme : null;
  } else {
    return isDark ? darkTheme : null;
  }
});
</script>
