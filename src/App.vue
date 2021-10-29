<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
    class="app"
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

<style>
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_5kjolj91npn.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_5kjolj91npn.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('//at.alicdn.com/t/webfont_5kjolj91npn.woff2')
      format('woff2'),
    url('//at.alicdn.com/t/webfont_5kjolj91npn.woff') format('woff'),
    /* chrome、firefox */ url('//at.alicdn.com/t/webfont_5kjolj91npn.ttf')
      format('truetype'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('//at.alicdn.com/t/webfont_5kjolj91npn.svg#Alibaba-PuHuiTi-Regular')
      format('svg'); /* iOS 4.1- */
}
.app {
  font-family: 'webfont' !important;
}
</style>
