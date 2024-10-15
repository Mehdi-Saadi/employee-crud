<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import EmployeeFormField from '@/components/employee/form/EmployeeFormField.vue';
import type { EmployeeToAdd } from '@/types/employee';
import { ref } from 'vue';

defineProps<{
    employee: EmployeeToAdd;
}>();
const emit = defineEmits(['close', 'submit']);

const getDefaultFormValues = (): EmployeeToAdd => {
    return {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        family: [],
    };
};

const form = ref<EmployeeToAdd>(getDefaultFormValues());

const submit = (): void => {
    emit('submit', form.value);

    // reset form fields to default
    form.value = getDefaultFormValues();
};
</script>

<template>
    <div class="flex flex-col space-y-5 p-5 border rounded mt-5">
            <!-- employee data -->
            <div class="grid grid-cols-2 gap-5">
                <EmployeeFormField
                    :autofocus="true"
                    v-model="form.firstName"
                    id="name"
                    label="نام"
                    type="text"
                />
                <EmployeeFormField
                    v-model="form.lastName"
                    label="نام خانوادگی"
                    id="last-name"
                    type="text"
                />
                <EmployeeFormField
                    v-model="form.dateOfBirth"
                    label="تاریخ تولد"
                    id="date-of-birth"
                    type="date"
                />
                <EmployeeFormField
                    v-model="form.email"
                    label="ایمیل"
                    id="email"
                    type="email"
                />
            </div>
            <!-- buttons -->
            <div class="flex items-center justify-between">
                <ButtonComponent
                    @click="submit()"
                    class="text-white bg-green-700 hover:bg-green-800"
                    title="افزودن"
                />
                <ButtonComponent
                    @click="emit('close')"
                    class="text-white bg-gray-500 hover:bg-gray-600"
                    title="انصراف"
                />
            </div>
        </div>
</template>
