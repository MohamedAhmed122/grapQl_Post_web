import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";

const validationSchema = Yup.object({
  username: Yup.string().required().min(3).label("Username"),

  password: Yup.string().required().min(6).label("Password"),
});

const handleSubmit = () => {};

export default function Login() {
  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">Login </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form className="flexCol">
              <FromInput name="username" placeholder="Username" />
              <FromInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <CustomButton
                type="submit"
                title={"Login"}
                disabled={!isValid || isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
