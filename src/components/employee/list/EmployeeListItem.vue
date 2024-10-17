<script setup lang="ts">
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';
import EmployeeUpdateForm from '@/components/employee/form/EmployeeUpdateForm.vue';
import DeleteButton from '@/components/buttons/DeleteButton.vue';
import useEmployeeStore from '@/stores/employee';
import type { Employee, EmployeeBrief } from '@/types/employee';
import { ref } from 'vue';

const props = defineProps<{
    employee: EmployeeBrief;
}>();

const employeeStore = useEmployeeStore();
const { getEmployeeDetails, deleteEmployee } = employeeStore;
const employeeDetails = ref<Employee | null>(null);
const showForm = ref<boolean>(false);

const toggleFormVisibility = async (): Promise<void> => {
    if (showForm.value) {
        showForm.value = false;
    
        employeeDetails.value = null;
    } else {
        showForm.value = true;

        employeeDetails.value = await getEmployeeDetails(props.employee.id);
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
                {{ `${employee.firstName} ${employee.lastName}` }}
            </span>
            <ChevronDownIcon
                class="size-4"
                :class="{ 'rotate-180': showForm }"
            />
        </div>
        <!-- details -->
        <div
            v-if="showForm"
            class="flex flex-col"
        >
            <span
                v-if="employeeStore.isLoading.getEmployeeDetails"
                class="mx-auto my-4"
            >
                در حال بارگیری...
            </span>
            <template v-else-if="employeeDetails">
                <DeleteButton @click="deleteEmployee(employee.id)" />

                <EmployeeUpdateForm
                    :employee="employeeDetails"
                    @close="showForm = false"
                />
            </template>
            <span
                v-else
                class="mx-auto my-4"
            >
                نتیجه ای یافت نشد...
            </span>
        </div>
    </li>
</template>
