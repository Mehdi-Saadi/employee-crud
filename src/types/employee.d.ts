import {
    relationValidationSchema,
    familyMemberValidationSchema,
    employeeValidationSchema,
} from 'src/scripts/validation.ts';
import type { InferType } from 'yup';

export type Employee = InferType<typeof employeeValidationSchema> & { id: string };

export type FamilyRelation = InferType<typeof relationValidationSchema>;

export type FamilyMember = InferType<typeof familyMemberValidationSchema>;

export type EmployeeBrief = Pick<Employee, 'id' | 'firstName' | 'lastName'>;

export type EmployeeToAdd = Omit<Employee, 'id'>;
