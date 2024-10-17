<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<template>
    <button
        class="rounded max-w-max px-5 py-2 transition duration-200 disabled:opacity-45"
        type="button"
    >
        {{ title }}
    </button>
</template>
