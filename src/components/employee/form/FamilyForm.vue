<script setup lang="ts">
import DeleteButton from '@/components/buttons/DeleteButton.vue';
import FormField from '@/components/form/FormField.vue';
import { validateRelation, validateString } from '@/scripts/validation';
import { Field, ErrorMessage } from 'vee-validate';

defineProps<{
    index: number;
}>();
const emit = defineEmits(['delete']);

const randomId = crypto.randomUUID();
</script>

<template>
    <div class="relative pt-5">
        <div
            class="absolute start-5 top-0 flex items-center space-x-2 rtl:space-x-reverse bg-white px-2"
        >
            <span class="font-bold text-xl"> {{ index }} # </span>
            <DeleteButton @click="emit('delete', index)" />
        </div>
        <div class="grid grid-cols-2 gap-5 border rounded p-5">
            <FormField
                :rules="validateString"
                :name="`family[${index}].name`"
                label="نام"
                type="text"
            />
            <FormField
                :rules="validateString"
                :name="`family[${index}].dateOfBirth`"
                label="تاریخ تولد"
                type="date"
            />
            <div class="flex flex-col">
                <label
                    :for="randomId"
                    class="px-3"
                >
                    نسبت
                </label>
                <Field
                    :id="randomId"
                    :rules="validateRelation"
                    :name="`family[${index}].relation`"
                    as="select"
                    class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
                >
                    <option value="spouse">همسر</option>
                    <option value="daughter">دختر</option>
                    <option value="son">پسر</option>
                </Field>
                <ErrorMessage
                    :name="`family[${index}].relation`"
                    class="text-xs text-red-700 mt-1 ps-3"
                />
            </div>
        </div>
    </div>
</template>
