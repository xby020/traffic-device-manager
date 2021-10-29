<template>
  <n-layout position="absolute" class="font-sans antialiase">
    <!-- Header -->
    <n-layout-header class="h-64px">
      <layout-header></layout-header>
    </n-layout-header>
    <!-- Main -->
    <n-layout has-sider position="absolute" style="top: 64px; bottom: 32px">
      <!-- Sider -->
      <n-layout-sider :native-scrollbar="false">
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>

      <!-- Content -->
      <n-layout :native-scrollbar="false">
        <router-view class="pr-4"></router-view>
      </n-layout>
    </n-layout>

    <!-- Footer -->
    <n-layout-footer
      position="absolute"
      class="h-32px bottom-0 left-0"
      bordered
    >
      Footer
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
  NH2
} from 'naive-ui';
import { LayoutHeader } from './components/Header';
</script>
