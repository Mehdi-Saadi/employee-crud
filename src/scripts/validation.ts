import * as Yup from 'yup';

const thisFieldIsRequiredMsg = 'این فیلد الزامی است';
const thisFieldMustBeValidEmailMsg = 'این فیلد باید یک ایمیل معتبر باشد';
const thisFieldMustBeValidDateMsg = 'این فیلد باید یک تاریخ معتبر باشد';

export const employeeValidationSchema = Yup.object({
    firstName: Yup.string().required(thisFieldIsRequiredMsg),
    lastName: Yup.string().required(thisFieldIsRequiredMsg),
    dateOfBirth: Yup.date()
        .typeError(thisFieldMustBeValidDateMsg)
        .max(new Date(), thisFieldMustBeValidDateMsg)
        .required(thisFieldIsRequiredMsg),
    email: Yup.string().email(thisFieldMustBeValidEmailMsg).required(thisFieldIsRequiredMsg),
    family: Yup.array().of(
        Yup.object({
            name: Yup.string().required(thisFieldIsRequiredMsg),
            dateOfBirth: Yup.date()
                .typeError(thisFieldMustBeValidDateMsg)
                .max(new Date(), thisFieldMustBeValidDateMsg)
                .required(thisFieldIsRequiredMsg),
            relation: Yup.string()
                .oneOf(['spouse', 'son', 'daughter'], thisFieldIsRequiredMsg)
                .required(thisFieldIsRequiredMsg),
        })
    ),
});
