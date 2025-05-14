<script setup lang="ts">
    /*
        import
    */
    // Composables
    // Components
    const test = ref<string>();

    onMounted(() => {
        console.log(test);
    });
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />
    </div>
</template>
