<script setup lang="ts">
import FormField from '@/components/form/FormField.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';
import type { FamilyMember } from '@/types/employee';

defineProps<{
    index: number;
}>();
const emit = defineEmits(['delete']);

const model = defineModel<FamilyMember>({ required: true });
const randomId = crypto.randomUUID();
</script>

<template>
    <div class="relative pt-5">
        <div class="absolute start-5 top-0 flex items-center space-x-2 rtl:space-x-reverse bg-white px-2">
            <span class="font-bold text-xl">
                {{ index }} #
            </span>
            <!-- delete button -->
            <button
                @click="emit('delete', index)"
                class="size-10 bg-red-600 hover:bg-red-800 rounded flex items-center justify-center ms-auto me-2"
                type="button"
            >
                <TrashIcon class="size-6 text-white" />
            </button>
        </div>
        <div class="grid grid-cols-2 gap-5 border rounded p-5">
            <FormField
                :autofocus="true"
                v-model="model.name"
                name="name"
                label="نام"
                type="text"
            />
            <FormField
                v-model="model.dateOfBirth"
                label="تاریخ تولد"
                name="date-of-birth"
                type="date"
            />
            <div class="flex flex-col">
                <label
                    :for="randomId"
                    class="px-3"
                >
                    نسبت
                </label>
                <select
                    class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
                    :id="randomId"
                    name="relation"
                    v-model="model.relation"
                >
                    <option value="spouse">همسر</option>
                    <option value="daughter">دختر</option>
                    <option value="son">پسر</option>
                </select>
            </div>
        </div>
    </div>
</template>
