import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
// formik
import { useFormik } from "formik";
import * as yup from "yup";
// ck editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box } from "@mui/system";

const validationSchema = yup.object({
  name: yup.string("نام را وارد کنید").required("نام را وارد کنید"),
  field: yup
    .string("ایمیل را وارد کنید")
    .email("ایمیل نامعتبر است")
    .required("ایمیل را وارد کنید"),
  slug: yup.string("متن پیام را وارد کنید").required("متن پیام را وارد کنید"),
});

const CreateAuthor = () => {
  const [imageUrl, setImageUrl] = useState("");
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
  const imageChangeHandler = (event) => {
    const imageBlob = URL.createObjectURL(event.target.files[0]);
    setImageUrl(imageBlob);
  };
  console.log(imageUrl);
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
          <Box sx={{ marginBottom: 1, marginTop: 2 }}>
            <label htmlFor="authorImage">
              <Typography component="h2" variant="subtitle1" mb={1}>
                تصویر نویسنده
              </Typography>
              <img
                src={imageUrl}
                alt="authorImage"
                width="400"
                height="300"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="authorImage"
              style={{ display: "none" }}
              onChange={imageChangeHandler}
            />
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateAuthor;
