"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import { rootUrl } from "@/api";

// Replace with your actual MailerLite API key and group ID
const MAILERLITE_API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDVkZmFhODVlODdkZjJkZTNhMzQ5MDE4MDFiMmE1MzQ4ZGRkNGFlMmYzZTEwMmE0M2YwYzhlYTI2MzkzYjA0ODRlYjE1ZDMyNmJhMTZhYWMiLCJpYXQiOjE3Mjg2MzI4NzUuNjgzMDY5LCJuYmYiOjE3Mjg2MzI4NzUuNjgzMDcxLCJleHAiOjQ4ODQzMDY0NzUuNjgwNTExLCJzdWIiOiIxMTUwNjg3Iiwic2NvcGVzIjpbXX0.T31ECZ5iqRn0MuSyKAF0oDeW6sKVQoGazAd4uzYH4NTuHfFSSH8DG6m749D2W3Bts4QH9-KhU-nWh9nSLGi7gIcwF4FRoc2Ou3RPevI-FWaOmMx5pPBESFHV-qbJPMWeEuN-5G1YE2-JyEpqxUPr-74gYxOi8ijA4p2AxlotXY22ufiFlr-V6eeVX4L6WlVF1jizshlUXCpDXqqDSPA1GWDLdK7IccZ8XZtcgRJESBhY6MnyfZcHQULAeM_0qEjcsz9fIyhs5Hpg91dB4KTGdtmhRENrhfNRAo1jUm8IlOt5Zh_T_vF2Rszr9DN9G2deESdcAlbemjmTXAXWN_x6_LVYIFIVQ7nMjmhfqNVDFZqCk5JNsF1lgxwM18W09Eta5W8ByiTa27UoECgFxNCBmjaS8SsmnhE8J5GnExp047H8vTTvOkXEYMsPURNdSoO_upVo2YIj7QsfGLArGvrg_skQUG5_8s0QRY0OiE7Az_EjuPVMOOEzbGEN0aaCbIz8qiRTJErcEO1KABFSavFKruT1XPBwgtcc7tL9-nZ8jxt3FbvzNC_XpNOyENSqj2HhQ1kBBRKKCa9m4cJ-VDGZoQM2xtABhwll31e-qq-SWAunAVFtms1qlTWxkx436efyMCVH8UglxZA48AESh4xUJo6b6O_r1CmBrASbnsIdrCQ";

interface FormValues {
  email: string;
}
const SignUp: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
  });

  const handleSubmit = async (
    values: { email: string },
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    return;
    try {
      const response = await axios.post(
        `${rootUrl}/subscribers`,
        {
          email: values.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${MAILERLITE_API_KEY}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Successfully subscribed to the MyAbtest.ai!");
        resetForm();
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signUpcontainer">
      <h2 className="title">Sign up for free A/B testing resources</h2>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="SignUpform">
            <div className="inputContainer">
              <Field
                type="email"
                name="email"
                className="signUpInput"
                placeholder="you@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="errorMessage"
              />
            </div>
            <div>
              <button
                type="submit"
                className="submitButton"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default SignUp;
