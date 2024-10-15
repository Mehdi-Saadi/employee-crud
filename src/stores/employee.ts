import type { EmployeeBrief } from '@/types/employee';
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useEmployeeStore = defineStore('employee', () => {
    const employees = ref<EmployeeBrief[]>([]);

    const fetchEmployees = async (): Promise<void> => {
        try {
            const response = await axios.get('/employee');

            employees.value = response.data;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        employees,
        fetchEmployees,
    };
});

export default useEmployeeStore;
