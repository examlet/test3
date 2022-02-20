<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true }
})

const global = useGlobalStore()
</script>

<template>
    <div
        mt-1px
        bg-white-500
        shadow-md
        float-left
        right-0
        fixed
        z-2
        h-full
        flex
        flex-col
        :style="{ width: global.drawerWidth }"
        style="transition: 0.3s;"
    >
        <slot />
    </div>
</template>

<style scoped>
</style>