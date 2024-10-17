import type { Employee, EmployeeBrief, EmployeeToAdd } from '@/types/employee';
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

    const getEmployeeDetails = async (employeeId: Employee['id']): Promise<Employee | null> => {
        try {
            const response = await axios.get(`/employee/${employeeId}`);

            return response.data;
        } catch (error) {
            console.error(error);

            return null;
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

    const updateEmployee = async (employee: Employee): Promise<void> => {
        try {
            const response = await axios.put(`/employee/${employee.id}`, employee);

            // update employee data
            for (const item of employees.value) {
                if (item.id === employee.id) {
                    item.firstName = response.data.firstName;
                    item.lastName = response.data.lastName;
                    return;
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteEmployee = async (employeeId: Employee['id']): Promise<void> => {
        try {
            await axios.delete(`/employee/${employeeId}`);

            // find and remove employee
            for (const [index, employee] of employees.value.entries()) {
                if (employee.id === employeeId) {
                    employees.value.splice(index, 1);
                    return;
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        employees,
        fetchEmployees,
        getEmployeeDetails,
        addEmployee,
        updateEmployee,
        deleteEmployee,
    };
});

export default useEmployeeStore;
