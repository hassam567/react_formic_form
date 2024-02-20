import * as yup from 'yup';

// Define individual schemas for role, user, date, and time
const roleSchema = yup.string().required("Please select a role");
const userSchema = yup.string().required("Please select a user");
const dateSchema = yup.date().required("Please select a date");
const timeSchema = yup.date().required("Please select a time");

// Define the main validation schema
export const ValidationSchema = yup.object().shape({
    location: yup.string().required("Please select a location"),
    reason: yup.string().required("Please select a reason"),
    date: dateSchema,
    time: timeSchema,
    role: roleSchema,
    user: userSchema,
    description: yup.string()
        .required("Description is required")
        .max(200, 'Description must be at most 200 characters')
        .trim(),
    comment: yup.string()
        .required("Comment is required")
        .max(300, 'Description must be at most 300 characters')
        .trim(),
    checkbox1: yup.boolean().oneOf([true], 'Checkbox must be checked'),
    checkbox2: yup.boolean().oneOf([true], 'Checkbox must be checked'),
});
