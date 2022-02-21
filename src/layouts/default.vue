<script setup lang="ts">
const global = useGlobalStore()
const route = useRoute()
const target = ref(null)
const myHoverableElement = ref(null)
const isHovered = useElementHover(myHoverableElement)
onClickOutside(target, () => global.drawerCollapsed = isHovered.value ? !global.drawerCollapsed : true)
</script>

<template>
  <div h-full>
    <Sidebar @mouseenter="global.showed = true" @mouseleave="global.showed = false" />
    <div h-full :style="{ 'margin-left': global.sidebarMargin }" style="transition: 0.3s ease;">
      <div bg-white-500 shadow-lg h-48px m0 p0 fixed z-1 w-full items-center>
        <div ml-3 flex items-center h-48px>
          <button
            text-gray-700
            hover:text-teal-700
            :class="[global.collapsed ? 'i-carbon-text-indent-more' : 'i-carbon-text-indent-less']"
            @click="global.toggleSidebar"
          ></button>
        </div>
      </div>

      <div v-if="!global.drawerCollapsed" bg-black-500 op10 fixed h-full w-full></div>
      <Drawer title="Настроки" ref="target" />

      <div h-full p-3 pt-60px>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
