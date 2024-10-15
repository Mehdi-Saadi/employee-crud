<script setup lang="ts">
import EmployeeAddForm from '@/components/employee/form/EmployeeAddForm.vue';
import EmployeeList from '@/components/employee/list/EmployeeList.vue';
import EmployeeLayout from '@/layouts/EmployeeLayout.vue';
import useEmployeeStore from '@/stores/employee';

const employeeStore = useEmployeeStore();
const { fetchEmployees } = employeeStore;

fetchEmployees();
</script>

<template>
    <EmployeeLayout>
        <EmployeeList v-if="employeeStore.employees.length" />
        <span v-else> در حال بارگیری... </span>

        <EmployeeAddForm />
    </EmployeeLayout>
</template>
