<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import EmployeeForm from '@/components/employee/form/EmployeeForm.vue';
import useEmployeeStore from '@/stores/employee';
import type { EmployeeToAdd } from '@/types/employee';
import { ref, useTemplateRef } from 'vue';

const { addEmployee } = useEmployeeStore();
const showFrom = ref<boolean>(false);

const employeeFormRef = useTemplateRef<InstanceType<typeof EmployeeForm>>('form-ref');

const defaultEmployeeValue: EmployeeToAdd = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    family: [],
};

const submit = async (employeeToAdd: EmployeeToAdd): Promise<void> => {
    await addEmployee(employeeToAdd);

    employeeFormRef.value?.resetForm();
};
</script>

<template>
    <!-- form -->
    <EmployeeForm
        v-if="showFrom"
        :employee="defaultEmployeeValue"
        form-type="add"
        ref="form-ref"
        @close="showFrom = false"
        @submit="submit"
    />

    <!-- trigger -->
    <ButtonComponent
        v-else
        @click="showFrom = true"
        class="text-white bg-green-700 hover:bg-green-800 mx-auto mt-5"
        title="افزودن کارمند"
    />
</template>
