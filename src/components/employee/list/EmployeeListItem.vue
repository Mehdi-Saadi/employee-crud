<script setup lang="ts">
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';
import useEmployeeStore from '@/stores/employee';
import type { Employee, EmployeeBrief } from '@/types/employee';
import { ref } from 'vue';

const props = defineProps<{
    employee: EmployeeBrief;
}>();

const { getEmployeeDetails } = useEmployeeStore();
const employeeDetails = ref<Employee | null>(null);
const showForm = ref<boolean>(false);

const toggleFormVisibility = async (): Promise<void> => {
    if (showForm.value) {
        showForm.value = false;
        employeeDetails.value = null;
    } else {
        employeeDetails.value = await getEmployeeDetails(props.employee.id);
        showForm.value = true;
    }
};
</script>

<template>
    <li class="flex flex-col justify-center border min-h-14 rounded">
        <!-- trigger -->
        <div
            @click="toggleFormVisibility"
            class="flex items-center justify-between px-5 min-h-14 cursor-pointer"
        >
            <span>
                {{ employee.firstName }}
            </span>
            <ChevronDownIcon class="size-4" />
        </div>
        <!-- details -->
        <div
            v-if="showForm"
            class="flex flex-col"
        >
            details
        </div>
    </li>
</template>
