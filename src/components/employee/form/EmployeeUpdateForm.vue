<script setup lang="ts">
import EmployeeForm from '@/components/employee/form/EmployeeForm.vue';
import useEmployeeStore from '@/stores/employee';
import type { Employee, EmployeeToAdd } from '@/types/employee';
import { cloneDeep } from 'lodash';

const props = defineProps<{
    employee: Employee;
}>();
const emit = defineEmits(['close']);

const { updateEmployee } = useEmployeeStore();
const { id, ...defaultEmployeeValue } = cloneDeep(props.employee);

const submit = (employee: EmployeeToAdd): void => {
    updateEmployee({
        id: id,
        ...cloneDeep(employee),
    });
    
    emit('close');
};
</script>

<template>
    <EmployeeForm
        :employee="defaultEmployeeValue"
        form-type="update"
        @submit="submit"
    />
</template>
