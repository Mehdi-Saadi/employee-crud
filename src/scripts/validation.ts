import type { EmployeeToAdd } from "@/types/employee";
import { toastAlert } from "@/scripts/sweetalert";

/**
 * returns true if email is valid, otherwise false
 * @param input
 * @returns boolean
 */
export const validateEmail = (input: any): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(String(input).toLowerCase());
};

export const validateEmployee = (employee: EmployeeToAdd): boolean => {
    const validations: {field: keyof EmployeeToAdd, message: string}[] = [
        { field: 'firstName', message: 'فیلد نام ضروری است!' },
        { field: 'lastName', message: 'فیلد نام خانوادگی ضروری است!' },
        { field: 'dateOfBirth', message: 'فیلد تاریخ تولد ضروری است!' },
    ];

    for (const { field, message } of validations) {
        if (!employee[field].length) {
            toastAlert('error', message);

            return false;
        }
    }

    if (!validateEmail(employee.email)) {
        toastAlert('error', 'ایمیل نا معتبر است!');
        
        return false;
    }

    return true;
};
