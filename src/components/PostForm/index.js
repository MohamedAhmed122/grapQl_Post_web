import { useState } from "react";
// import { useSnackbar } from "notistack";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";
import LottieView from "../../common/LottieView";

import "./styleform.css";

const validationSchema = Yup.object({
  header: Yup.string().required().min(10).label("Header"),
  body: Yup.string().required().min(20).label("Body"),
});

export default function CreatePost() {
  const [displayDone, setDisplayDone] = useState(false);
  //   const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">Create Post </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ header: "", body: "" }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form className="flexCol">
              <FromInput name="header" placeholder="Post Header" />
              <FromInput name="body" placeholder="Post body" />

              <CustomButton
                type="submit"
                title={"Create Post"}
                disabled={!isValid || isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
      {displayDone && <LottieView setDisplayDone={setDisplayDone} />}
    </div>
  );
}
