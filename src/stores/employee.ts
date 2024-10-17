import type { Employee, EmployeeBrief, EmployeeToAdd } from '@/types/employee';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

type IsLoadingParamKeys =
    | 'fetchEmployees'
    | 'getEmployeeDetails'
    | 'addEmployee'
    | 'updateEmployee'
    | 'deleteEmployee';

type IsLoading = {
    [K in IsLoadingParamKeys]: boolean;
};

const useEmployeeStore = defineStore('employee', () => {
    const employees = ref<EmployeeBrief[]>([]);
    const isLoading = ref<IsLoading>({
        fetchEmployees: false,
        getEmployeeDetails: false,
        addEmployee: false,
        updateEmployee: false,
        deleteEmployee: false,
    });

    const setLoading = (key: IsLoadingParamKeys, status: boolean): void => {
        isLoading.value[key] = status;
    };
    const setLoadingTrue = (key: IsLoadingParamKeys): void => setLoading(key, true);
    const setLoadingFalse = (key: IsLoadingParamKeys): void => setLoading(key, false);

    const fetchEmployees = async (): Promise<void> => {
        setLoadingTrue('fetchEmployees');

        try {
            const response = await axios.get('/employee');

            employees.value = response.data;
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingFalse('fetchEmployees');
        }
    };

    const getEmployeeDetails = async (employeeId: Employee['id']): Promise<Employee | null> => {
        setLoadingTrue('getEmployeeDetails');

        try {
            const response = await axios.get(`/employee/${employeeId}`);

            return response.data;
        } catch (error) {
            console.error(error);

            return null;
        } finally {
            setLoadingFalse('getEmployeeDetails');
        }
    };

    const addEmployee = async (employee: EmployeeToAdd): Promise<void> => {
        setLoadingTrue('addEmployee');

        try {
            const response = await axios.post('/employee', employee);

            employees.value.push({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingFalse('addEmployee');
        }
    };

    const updateEmployee = async (employee: Employee): Promise<void> => {
        setLoadingTrue('updateEmployee');

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
        } finally {
            setLoadingFalse('updateEmployee');
        }
    };

    const deleteEmployee = async (employeeId: Employee['id']): Promise<void> => {
        setLoadingTrue('deleteEmployee');

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
        } finally {
            setLoadingFalse('deleteEmployee');
        }
    };

    return {
        employees,
        isLoading,
        fetchEmployees,
        getEmployeeDetails,
        addEmployee,
        updateEmployee,
        deleteEmployee,
    };
});

export default useEmployeeStore;
