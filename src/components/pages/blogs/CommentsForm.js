import React, { useEffect, useState } from "react";
// components
import { Box, Button, TextField, Typography } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
// react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// formik
import { useFormik } from "formik";
import * as yup from "yup";
// apollo
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../../graphql/mutations";
const validationSchema = yup.object({
  name: yup.string("نام را وارد کنید").required("نام را وارد کنید"),
  email: yup
    .string("ایمیل را وارد کنید")
    .email("ایمیل نامعتبر است")
    .required("ایمیل را وارد کنید"),
  message: yup
    .string("متن پیام را وارد کنید")
    .required("متن پیام را وارد کنید"),
});
function CommentsForm({ slug }) {
  const [pressed, setPressed] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendComment();
      values.name = "";
      values.email = "";
      values.message = "";
      setPressed(true);
    },
  });
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name: formik.values.name,
      email: formik.values.email,
      text: formik.values.message,
      slug,
    },
  });
  useEffect(() => {
    if (error && pressed) {
      toast.error("ارسال پیام با مشکل مواجه شد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      setPressed(false);
    }
  }, [error]);
  useEffect(() => {
    if (data && pressed) {
      toast.success("پیام ارسال شد و در انتظار تایید است", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [data]);
  return (
    <Box p={3} sx={{ boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.45)" }}>
      <Typography component="h1" variant="h5" fontWeight={700} mb={2}>
        افزودن پیام
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          fullWidth
          sx={{ marginBottom: 2 }}
          label="نام"
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          name="email"
          fullWidth
          sx={{ marginBottom: 2 }}
          label="ایمیل"
          variant="standard"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="message"
          name="message"
          fullWidth
          sx={{ marginBottom: 2 }}
          label="متن پیام"
          multiline
          rows={4}
          variant="standard"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          color="primary"
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading ? <HourglassBottomIcon /> : `ارسال پیام`}
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
}

export default CommentsForm;
