<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

withDefaults(
    defineProps<{
        autofocus?: boolean;
        id: string;
        label: string;
        type: InputTypeHTMLAttribute;
    }>(),
    {
        autofocus: false,
    }
);

const model = defineModel({ required: true });
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
            :type
            v-model="model"
            class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
        />
    </div>
</template>
