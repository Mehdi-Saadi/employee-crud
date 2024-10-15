import type { EmployeeBrief, EmployeeToAdd } from '@/types/employee';
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

    const addEmployee = async (employee: EmployeeToAdd): Promise<void> => {
        try {
            const response = await axios.post('/employee', employee);

            employees.value.push({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return {
        employees,
        fetchEmployees,
        addEmployee,
    };
});

export default useEmployeeStore;
