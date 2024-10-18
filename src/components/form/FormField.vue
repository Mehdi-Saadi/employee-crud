<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import { type InputTypeHTMLAttribute } from 'vue';

defineProps<{
    name: string;
    label: string;
    type: InputTypeHTMLAttribute;
    rules?: any;
}>();

const randomId = crypto.randomUUID();
</script>

<template>
    <div class="flex flex-col">
        <label
            :for="randomId"
            class="px-3"
        >
            {{ label }}
        </label>
        <Field
            :id="randomId"
            :name
            :rules
            :type
            class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
        />
        <ErrorMessage
            :name
            class="text-xs text-red-700 mt-1 ps-3"
        />
    </div>
</template>
