import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
// formik
import { useFormik } from "formik";
import * as yup from "yup";
// ck editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../../shared/Editor";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
/* import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
 */
/* const editorConfiguration = {
  plugins: [Alignment],
}; */

const validationSchema = yup.object({
  name: yup.string("نام را وارد کنید").required("نام را وارد کنید"),
  field: yup
    .string("ایمیل را وارد کنید")
    .email("ایمیل نامعتبر است")
    .required("ایمیل را وارد کنید"),
  slug: yup.string("متن پیام را وارد کنید").required("متن پیام را وارد کنید"),
});

const CreateAuthor = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      field: "",
      slug: "",
      description: "",
      fileName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  return (
    <Grid container>
      <Grid item xs={12} mb={2}>
        <Typography component="h1" variant="h6">
          ثبت نویسنده
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <TextField label="نام نویسنده" fullWidth sx={{ marginBottom: 1 }} />
          <TextField label="تخصص" fullWidth sx={{ marginBottom: 1 }} />
          <TextField
            label="شناسه نویسنده (مثال : amin-mardani )"
            fullWidth
            sx={{ marginBottom: 1 }}
          />
          <CKEditor
            editor={ClassicEditor}
            data=""
            config={{
              language: "fa",
            }}
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateAuthor;
