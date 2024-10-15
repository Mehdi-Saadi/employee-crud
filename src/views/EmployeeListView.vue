<script setup lang="ts">
import EmployeeLayout from '@/layouts/EmployeeLayout.vue';
import useEmployeeStore from '@/stores/employee';

const { fetchEmployees } = useEmployeeStore();

fetchEmployees();
</script>

<template>
    <EmployeeLayout>
        کارمندان
    </EmployeeLayout>
</template>
