import type { FamilyRelation } from '@/types/employee';

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
