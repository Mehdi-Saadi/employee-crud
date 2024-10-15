<script setup lang="ts">
import { onMounted, useTemplateRef, type InputTypeHTMLAttribute } from 'vue';

const props = withDefaults(
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
const inputField = useTemplateRef('input-ref');

onMounted(() => {
    if (props.autofocus && inputField.value) {
        inputField.value.focus();
    }
});
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
            ref="input-ref"
        />
    </div>
</template>
