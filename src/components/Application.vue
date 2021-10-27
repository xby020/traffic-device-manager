<template>
  <!-- 顶部进度条 -->
  <n-loading-bar-provider>
    <!-- 对话框 -->
    <n-dialog-provider>
      <!-- 右上角通知 -->
      <n-notification-provider>
        <!-- 上面信息 -->
        <n-message-provider>
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts">
import {
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider
} from 'naive-ui';
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'Application',
  components: {
    NLoadingBarProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider
  },
  setup() {}
});
</script>
