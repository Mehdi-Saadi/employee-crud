<script setup lang="ts">
import FormField from '@/components/form/FormField.vue';
import type { FamilyMember } from '@/types/employee';

const model = defineModel<FamilyMember>({ required: true });
</script>

<template>
    <div class="grid grid-cols-2 gap-5 border rounded p-5">
        <FormField
            :autofocus="true"
            v-model="model.name"
            id="name"
            label="نام"
            type="text"
        />
        <FormField
            v-model="model.dateOfBirth"
            label="تاریخ تولد"
            id="date-of-birth"
            type="date"
        />
        <div class="flex flex-col">
            <label
                for="id"
                class="px-3"
            >
                نسبت
            </label>
            <select
                class="border border-gray-300 focus:ring-0 focus:border-gray-400 rounded"
                id="relation"
                name="relation"
                v-model="model.relation"
            >
                <option value="spouse">همسر</option>
                <option value="daughter">دختر</option>
                <option value="son">پسر</option>
            </select>
        </div>
    </div>
</template>
