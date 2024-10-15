import type { Employee } from '@/types/employee';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useEmployeeStore = defineStore('employee', () => {
    const employees = ref<Employee[]>([]);

    return {
        employees,
    };
});

export default useEmployeeStore;
