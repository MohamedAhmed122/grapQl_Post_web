import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";

const validationSchema = Yup.object({
  username: Yup.string().required().min(3).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().required().min(6).label("Password Must Match"),
});

const handleSubmit = () => {};

export default function Register() {
  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">Register </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            username: "",
            password: "",
            email: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form className="flexCol">
              <FromInput name="username" placeholder="Username" />
              <FromInput name="email" placeholder="Email" />
              <FromInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <FromInput
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />

              <CustomButton
                type="submit"
                title={"Register"}
                disabled={!isValid || isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
