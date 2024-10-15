type DateOfBirth = string; // date-time

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: DateOfBirth;
    family: Family[];
}

export interface Family {
    name: string;
    dateOfBirth: DateOfBirth;
    relation: 'spouse' | 'daughter' | 'son';
}

export type EmployeeBrief = Pick<Employee, 'id' | 'firstName' | 'lastName'>;
