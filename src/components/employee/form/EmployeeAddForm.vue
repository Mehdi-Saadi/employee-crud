<script setup lang="ts">
import ButtonComponent from '@/components/buttons/ButtonComponent.vue';
import EmployeeForm from '@/components/employee/form/EmployeeForm.vue';
import useEmployeeStore from '@/stores/employee';
import type { EmployeeToAdd } from '@/types/employee';
import { ref } from 'vue';

const { addEmployee } = useEmployeeStore();
const showFrom = ref<boolean>(false);

const defaultEmployeeValue: EmployeeToAdd = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    family: [],
};

const submit = async (options: { values: EmployeeToAdd; resetForm: any }): Promise<void> => {
    await addEmployee(options.values);

    options.resetForm();
};
</script>

<template>
    <!-- form -->
    <EmployeeForm
        v-if="showFrom"
        :employee="defaultEmployeeValue"
        form-type="add"
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
