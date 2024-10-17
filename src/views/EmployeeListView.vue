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
        <span
            v-if="employeeStore.isLoading.fetchEmployees"
            class="mt-8 mb-3 mx-auto"
        >
            در حال بارگیری...
        </span>
        <span
            v-else-if="employeeStore.employees.length === 0"
            class="mt-8 mb-3 mx-auto"
        >
            نتیجه ای برای نمایش وجود ندارد...
        </span>
        <EmployeeList v-else />

        <EmployeeAddForm />
    </EmployeeLayout>
</template>
