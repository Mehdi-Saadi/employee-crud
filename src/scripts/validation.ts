import * as Yup from 'yup';

const thisFieldIsRequiredMsg = 'این فیلد الزامی است';
const thisFieldMustBeValidEmailMsg = 'این فیلد باید یک ایمیل معتبر باشد';
const thisFieldMustBeValidDateMsg = 'این فیلد باید یک تاریخ معتبر باشد';

const dateOfBirthValidationSchema = Yup.string()
    .required(thisFieldIsRequiredMsg)
    .test('is-valid-date', thisFieldMustBeValidDateMsg, value => !isNaN(new Date(value).getTime()))
    .test(
        'is-not-future-date',
        thisFieldMustBeValidDateMsg,
        value => new Date(value) <= new Date()
    );

export const relationValidationSchema = Yup.string()
    .oneOf(['spouse', 'son', 'daughter'], thisFieldIsRequiredMsg)
    .required(thisFieldIsRequiredMsg);

export const familyMemberValidationSchema = Yup.object({
    name: Yup.string().required(thisFieldIsRequiredMsg),
    dateOfBirth: dateOfBirthValidationSchema,
    relation: relationValidationSchema,
});

export const employeeValidationSchema = Yup.object({
    firstName: Yup.string().required(thisFieldIsRequiredMsg),
    lastName: Yup.string().required(thisFieldIsRequiredMsg),
    dateOfBirth: dateOfBirthValidationSchema,
    email: Yup.string().email(thisFieldMustBeValidEmailMsg).required(thisFieldIsRequiredMsg),
    family: Yup.array().of(familyMemberValidationSchema),
});
