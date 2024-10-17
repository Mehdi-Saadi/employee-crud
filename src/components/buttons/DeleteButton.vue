<script setup lang="ts">
import SpinIcon from '@/components/icons/SpinIcon.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';

defineProps<{
    disabled?: boolean;
}>();
</script>

<template>
    <button
        class="size-10 bg-red-600 hover:bg-red-800 rounded flex items-center justify-center ms-auto me-2 disabled:opacity-45 text-white"
        type="button"
    >
        <SpinIcon
            v-if="disabled"
            class="animate-spin size-5"
        />
        <TrashIcon
            v-else
            class="size-6"
        />
    </button>
</template>
