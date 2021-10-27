<template>
  <n-layout class="w-screen h-screen">
    <!-- Header -->
    <n-layout-header class="h-64px" bordered>颐和园路</n-layout-header>
    <!-- Main -->
    <n-layout position="absolute" class="top-64px" has-sider>
      <!-- Sider -->
      <n-layout-sider :native-scrollbar="false" bordered>
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
        <router-view></router-view>
      </n-layout>
    </n-layout>

    <!-- Footer -->
    <n-layout-footer position="absolute" class="h-32px" bordered>
      Footer
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter } from 'naive-ui';
</script>
