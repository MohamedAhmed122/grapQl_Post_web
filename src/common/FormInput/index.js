import { useField } from "formik";
import { FormControl } from "@material-ui/core";

import CustomInput from "../CustomInput";

export default function FromInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl
      style={{ width: "100%", marginTop: "1.5rem" }}
      error={meta.touched && !!meta.error}
    >
      <CustomInput {...field} {...props} />
      {meta.error && meta.touched ? (
        <label style={{ color: "red", marginTop: 10, fontSize: 14 }}>
          {meta.error}
        </label>
      ) : null}
    </FormControl>
  );
}
