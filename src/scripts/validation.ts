import type { EmployeeToAdd, FamilyRelation } from '@/types/employee';
import { toastAlert } from '@/scripts/sweetalert';

/**
 * Returns true on success, otherwise error message
 * @param value
 * @returns string | true
 */
export const validateEmail = (value: any): string | true => {
    if (!value) {
        return 'این فیلد الزامی است';
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return 'این فیلد باید یک ایمیل معتبر باشد';
    }

    return true;
};

/**
 * Returns true on success, otherwise error message
 * @param value
 * @returns string | true
 */
export const validateString = (value: any): string | true =>
    String(value).trim() ? true : 'این فیلد الزامی است';

/**
 * Returns true on success, otherwise error message
 * @param value
 * @returns string | true
 */
export const validateRelation = (value: any): string | true => {
    if (!value) {
        return 'این فیلد الزامی است';
    }

    const relations: FamilyRelation[] = ['spouse', 'son', 'daughter'];

    if (!relations.includes(value)) {
        return 'مقدار نامعتبر است';
    }

    return true;
};

export const validateEmployee = (employee: EmployeeToAdd): boolean => {
    const validations: { field: keyof EmployeeToAdd; message: string }[] = [
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
