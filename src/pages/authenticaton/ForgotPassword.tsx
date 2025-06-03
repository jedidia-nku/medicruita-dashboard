import { useEffect, useState } from "react";
import OnboardingIntro from "../../components/onBoarding/OnboardingIntro";
import Verification from "./OtpModal/OtpModal";
import { useFormik } from "formik";
import { emailValidationSchema } from "../../validations/authValidations/AuthValidation";
import { useMutation } from "@tanstack/react-query";
import apiRequest from "../../lib/apiRequest";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { token } = useAppSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);

    useEffect(() => {
      if (token) {
        navigate("/overview");
      }
    }, [token, navigate]);

  const handleClose = () => {
    setOtpModalOpen(false);
  };

  const requestMutation = useMutation({
    mutationFn: async (credentials: { email: string}) => {
      const response = await apiRequest.post("/users/request", credentials);
      return response.data;
    },
    onSuccess: () => {
      setOtpModalOpen(true);
    },
    onError: (error: any) => {
      console.error("Login error:", error.response?.data || error.message);
    },
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: emailValidationSchema,
    onSubmit: (values) => {
      requestMutation.mutate(values);
    },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row md:justify-center items-center bg-gradient-to-t from-[#1E63B41A] to-[#244266] lg:bg-none">

      <div className="h-[11%] flex items-center lg:hidden">
            <img src="logo.png" alt="Logo" className="w-[320px]" />
          </div>
          

        <div className="hidden lg:block w-1/2">
          <OnboardingIntro />
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <div className="bg-[#FFFFFF] py-8 px-6 rounded-2xl w-[90%] md:w-[60%]">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Heading */}
              <div className="pb-1">
                <h2 className="text-[#1F2937] text-3xl font-bold mb-2">Forgot Password?</h2>
                <p className="text-[#6B7280] mb-3">Enter Your Email Address to Continue</p>
              </div>

              {/* Email Input Field */}
              <div className="mb-4">
                <label className="text-[#4B5563] font-semibold block mb-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0D2B4E] font-inter text-[#FFFFFF] py-2 rounded-md"
                disabled={requestMutation.isPending}
              >
                {requestMutation.isPending ? "Verifying..." : "Continue"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      <Verification isOpen={isOtpModalOpen} onClose={handleClose} email={formik.values.email} type="reset-password" />
    </>
  );
};

export default ForgotPassword;
