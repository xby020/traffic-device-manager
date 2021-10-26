<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { dateZhCN, zhCN } from 'naive-ui';
</script>
