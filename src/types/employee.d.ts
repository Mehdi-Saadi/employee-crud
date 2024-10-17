type DateOfBirth = string; // date-time

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: DateOfBirth;
    family: Family[];
}

export type FamilyRelation = 'spouse' | 'daughter' | 'son';

export interface Family {
    name: string;
    dateOfBirth: DateOfBirth;
    relation: FamilyRelation;
}

export type EmployeeBrief = Pick<Employee, 'id' | 'firstName' | 'lastName'>;

export type EmployeeToAdd = Omit<Employee, 'id'>;
