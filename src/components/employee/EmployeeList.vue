<script setup lang="ts">
import EmployeeListItem from '@/components/employee/EmployeeListItem.vue';
import useEmployeeStore from '@/stores/employee';

const employeeStore = useEmployeeStore();
</script>

<template>
    <ol class="flex flex-col mt-5">
        <EmployeeListItem
            v-for="employee of employeeStore.employees"
            :key="employee.id"
            :employee
        />
    </ol>
</template>
