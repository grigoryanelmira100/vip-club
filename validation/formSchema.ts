import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .max(255, "First Name must be 255 characters or less"),
  lastName: yup
    .string()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .max(255, "Last Name must be 255 characters or less"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/@/, "Email must include @")
    .max(255, "Email must be 255 characters or less"),
  phone: yup
    .string()
    .trim()
    .required("Phone Number is required")
    .matches(/^[0-9+()\-\s]*$/, "Phone number contains invalid characters")
    .test("digit-count", function (value) {
      if (!value) return false;
      const digitCount = value.replace(/\D/g, "").length;

      if (digitCount < 7 || digitCount > 15) {
        return this.createError({
          message: "Phone must contain between 7 and 15 digits.",
        });
      }
      return true;
    }),
});

export type FormData = yup.InferType<typeof formSchema>;
