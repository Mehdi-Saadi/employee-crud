<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<template>
    <button
        class="text-white bg-green-700 rounded max-w-max px-5 py-2 hover:bg-green-800 transition duration-200"
        type="button"
    >
        {{ title }}
    </button>
</template>
