<script setup lang="ts">
import SpinIcon from '@/components/icons/SpinIcon.vue';

defineProps<{
    title: string;
    disabled?: boolean;
}>();
</script>

<template>
    <button
        class="rounded max-w-max px-5 py-2 transition duration-200 disabled:opacity-45 flex items-center justify-center"
        type="button"
        :disabled
    >
        <SpinIcon
            v-if="disabled"
            class="animate-spin size-5"
        />
        <span v-else>
            {{ title }}
        </span>
    </button>
</template>
