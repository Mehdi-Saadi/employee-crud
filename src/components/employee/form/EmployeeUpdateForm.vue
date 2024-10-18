<script setup lang="ts">
import EmployeeForm from '@/components/employee/form/EmployeeForm.vue';
import useEmployeeStore from '@/stores/employee';
import type { Employee, EmployeeToAdd } from '@/types/employee';
import { toastAlert } from '@/scripts/sweetalert';
import { cloneDeep } from 'lodash';

const props = defineProps<{
    employee: Employee;
}>();

const { updateEmployee } = useEmployeeStore();
const { id, ...defaultEmployeeValue } = cloneDeep(props.employee);

const submit = async (employee: EmployeeToAdd): Promise<void> => {
    await updateEmployee({
        id: id,
        ...cloneDeep(employee),
    });

    toastAlert('success', 'اطلاعات بروز شد');
};
</script>

<template>
    <EmployeeForm
        :employee="defaultEmployeeValue"
        form-type="update"
        @submit="submit"
    />
</template>
