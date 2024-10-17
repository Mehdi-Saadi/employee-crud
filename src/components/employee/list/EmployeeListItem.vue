<script setup lang="ts">
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';
import useEmployeeStore from '@/stores/employee';
import type { Employee, EmployeeBrief } from '@/types/employee';
import { ref } from 'vue';

const props = defineProps<{
    employee: EmployeeBrief;
}>();

const { getEmployeeDetails, deleteEmployee } = useEmployeeStore();
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
            <template v-if="employeeDetails">
                <button
                    @click="deleteEmployee(employee.id)"
                    class="size-10 bg-red-600 hover:bg-red-800 rounded flex items-center justify-center ms-auto me-2"
                    type="button"
                >
                    <TrashIcon class="size-6 text-white" />
                </button>
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
