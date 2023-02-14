import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextField from "./TextField";

export default function Signup() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div>
            <h1 className="my-4 font-weight-bold display-4">Signup</h1>
            {console.log(formik.values)}
            <Form>
              <TextField type="text" label="First Name" name="firstName" />
              <TextField type="text" label="Last Name" name="lastName" />
              <TextField type="email" label="Email" name="email" />
              <TextField type="password" label="Password" name="password" />
              <TextField
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />
              <button className="btn btn-dark mt-3 m-2" type="submit">
                Register
              </button>
              <button className="btn btn-danger mt-3 m-2" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
