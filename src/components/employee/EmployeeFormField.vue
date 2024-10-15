<script setup lang="ts">
withDefaults(
    defineProps<{
        label: string;
        id: string;
        autofocus?: boolean;
    }>(),
    {
        autofocus: false,
    }
);

const model = defineModel();
</script>

<template>
    <div class="flex flex-col">
        <label
            :for="id"
            class="px-3"
        >
            {{ label }}
        </label>
        <input
            :autofocus
            :id
            :name="id"
            v-model="model"
            class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
            type="text"
        />
    </div>
</template>
