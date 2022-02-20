<script setup lang="ts">
const global = useGlobalStore()
</script>

<template>
  <div
    bg-white-500
    shadow-md
    float-left
    fixed
    z-1
    h-full
    p-2
    flex
    flex-col
    :style="{ width: global.sidebarWidth }"
    style="transition: 0.3s ease;"
  >
    <div flex items-center h-60px ml-2 font-bold text-xl text-teal-600>
      <i i-carbon-webhook flex-shrink-0 />
      <div v-if="!global.collapsed || global.showed" truncate ml-1>QuickSales</div>
    </div>

    <hr op20 mx-3 my-2 />
    <SidebarLink to="/app/123" icon="i-carbon-home" title="Русский язык (ЕГЭ)" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/app/123/leads" icon="i-carbon-collaborate" title="Клиенты" />
    <SidebarLink to="/app/123/orders" icon="i-carbon-shopping-cart" title="Заказы" />
    <SidebarLink to="/app/123/chats" icon="i-carbon-application-web" title="Мессенджер" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/app/123/mails" icon="i-carbon-scan" title="Рассылки" />
    <SidebarLink to="/app/123/bots" icon="i-carbon-app-connectivity" title="Чат-боты" />
    <SidebarLink to="/app/123/triggers" icon="i-carbon-flow-stream-reference" title="Триггеры" />
    <SidebarLink to="/app/123/automation" icon="i-carbon-page-scroll" title="Подписки" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/app/123/analitics" icon="i-carbon-chart-combo" title="Аналитика" />
    <SidebarLink to="/app/123/controls" icon="i-carbon-operations-record" title="Управление" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/app/123/processes" icon="i-carbon-iot-connect" title="Процессы" />
    <SidebarLink to="/app/123/api" icon="i-carbon-container-software" title="API и интеграции" />

    <div v-if="!global.collapsed || global.showed" absolute bottom-0 w-full mb-3 flex flex-col ml-2>
      <a
        href="#"
        op60
        text-sm
        text-left
        fw300
        hover:underline
        truncate
        decoration-1
        underline-offset-3
        underline-opacity-50
      >support@quicksales.dev</a>
      <div op60 text-sm text-left fw300 mt-1 truncate>© QuickSales, 2022</div>
    </div>
  </div>
</template>

<style scoped>
</style>