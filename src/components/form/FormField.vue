<script setup lang="ts">
import { type InputTypeHTMLAttribute } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps<{
    name: string;
    label: string;
    type: InputTypeHTMLAttribute;
    value?: string;
}>();

const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
} = useField(props.name, undefined, {
    initialValue: props.value,
});
</script>

<template>
    <div class="flex flex-col">
        <label
            :for="name"
            class="px-3"
        >
            {{ label }}
        </label>
        <input
            :class="
                errorMessage
                    ? 'border-red-700 focus:border-red-700'
                    : 'border-gray-300 focus:border-gray-400'
            "
            :id="name"
            :name
            :type
            :validate-on-input="true"
            :value="inputValue"
            class="border focus:ring-0 rounded"
            @input="handleChange"
            @blur="handleBlur"
        />
        <span
            class="text-xs text-red-700 mt-1 ps-3 h-4"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>
