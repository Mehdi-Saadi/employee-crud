<script setup lang="ts">
import { onMounted, useTemplateRef, type InputTypeHTMLAttribute } from 'vue';

const props = withDefaults(
    defineProps<{
        autofocus?: boolean;
        name: string;
        label: string;
        type: InputTypeHTMLAttribute;
    }>(),
    {
        autofocus: false,
    }
);

const model = defineModel({ required: true });
const inputField = useTemplateRef('input-ref');
const randomId = crypto.randomUUID();

onMounted(() => {
    if (props.autofocus && inputField.value) {
        inputField.value.focus();
    }
});
</script>

<template>
    <div class="flex flex-col">
        <label
            :for="randomId"
            class="px-3"
        >
            {{ label }}
        </label>
        <input
            :autofocus
            :id="randomId"
            :name
            :type
            v-model="model"
            class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
            ref="input-ref"
        />
    </div>
</template>
