import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
    const collapsed = ref(false)
    const showed = ref(false)
    const toggleSidebar = () => (collapsed.value = !collapsed.value)
    const showSidebar = () => (showed.value = !showed.value)
    const sidebarWidth = computed(() => `${collapsed.value && !showed.value ? 3.3 : 12.5}rem`)
    const sidebarMargin = computed(() => `${collapsed.value ? 3.3 : 12.5}rem`)

    const drawerCollapsed = ref(true)
    const toggleDrawer = () => (drawerCollapsed.value = !drawerCollapsed.value)
    const drawerWidth = computed(() => `${drawerCollapsed.value ? 0 : 290}px`)

    const tabName = ref('')
    const setTabName = (name: string) => (tabName.value = name)

    return {
        collapsed,
        toggleSidebar,
        sidebarWidth,
        sidebarMargin,
        showed, 
        showSidebar,

        drawerCollapsed,
        toggleDrawer,
        drawerWidth,

        tabName,
        setTabName,
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))