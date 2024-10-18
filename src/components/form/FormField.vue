<script setup lang="ts">
import { Field, ErrorMessage, useForm } from 'vee-validate';
import { type InputTypeHTMLAttribute } from 'vue';

defineProps<{
    name: string;
    label: string;
    type: InputTypeHTMLAttribute;
    rules?: any;
}>();

const randomId = crypto.randomUUID();
const { errors } = useForm();
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
            :class="
                errors[name]
                    ? 'border-red-700 focus:border-red-700'
                    : 'border-gray-300 focus:border-gray-400'
            "
            class="border focus:ring-0 rounded"
            :validate-on-input="true"
        />
        <ErrorMessage
            :name
            class="text-xs text-red-700 mt-1 ps-3"
        />
    </div>
</template>
