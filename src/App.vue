<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
    class="app"
  >
    <n-theme-editor>
      <Application>
        <router-view></router-view>
      </Application>
    </n-theme-editor>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { dateZhCN, zhCN, darkTheme, NThemeEditor } from 'naive-ui';
import { useThemeStore } from '@/store/modules/theme';
import Application from '@/components/Application.vue';

const themeStore = useThemeStore();
const theme = computed(() => {
  const isDark = themeStore.getDark;
  return isDark ? darkTheme : null;
});
const themeOverrides = computed(() => {
  return themeStore.getThemeOverrides;
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
