<script setup lang="ts">
import EmployeeList from '@/components/employee/EmployeeList.vue';
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
    </EmployeeLayout>
</template>
