<script setup lang="ts">
const global = useGlobalStore()
const route = useRoute()
const target = ref(null)
const myHoverableElement = ref(null)
const isHovered = useElementHover(myHoverableElement)
onClickOutside(target, (event) => global.drawerCollapsed = isHovered.value ? !global.drawerCollapsed : true)

</script>

<template>
  <div>
    <Sidebar @mouseenter="global.showed = true" @mouseleave="global.showed = false" />
    <div :style="{ 'margin-left': global.sidebarMargin }" style="transition: 0.3s ease;">
      <div flex justify-between bg-white-500 shadow-lg h-48px>
        <div ml-3 flex items-center>
          <button
            hover:text-teal-700
            :class="[global.collapsed ? 'i-carbon-text-indent-more' : 'i-carbon-text-indent-less']"
            @click="global.toggleSidebar"
          ></button>
        </div>
        
        <div flex items-center>
          <Breadcrumb :url="route.path" :titles="['Каналы', 'Русский язык (ЕГЭ)', global.tabName]"/>
        </div>

        <div mr-5 flex items-center>
          <button mr-5 i-carbon-notification hover:text-teal-700></button>
          <div text-sm>Лукин Вадим #1337</div>
          <hr
            mx-5
            op50
            style="border: none; border-left: 1px solid hsla(200, 10%, 50%,100); height: 45%; width: 1px;"
          />
          <button i-carbon-idea hover:text-teal-700></button>
          <button
            ml-3
            i-carbon-settings
            transition-transform
            duration-300
            ease-in-out
            hover:text-teal-700
            :class="{ 'rotate-360': !global.drawerCollapsed }"
            ref="myHoverableElement"
          ></button>
        </div>
      </div>
      <div v-if="!global.drawerCollapsed" bg-black-500 op10 fixed h-full w-full></div>
      <Drawer title="Настроки" ref="target"/>
      <slot />
    </div>
  </div>
</template>

<style scoped>
</style>
