"use client";
import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import OnboardingIntro from "../../components/onBoarding/OnboardingIntro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import passwordValidationSchema from "../../validations/authValidations/AuthValidation";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useMutation } from "@tanstack/react-query";
import apiRequest from "../../lib/apiRequest";
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
    const { token } = useAppSelector((state: any) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();

    // Get email & otpCode from state or redirect if missing
    const { email, otpCode } = location.state || {};
    useEffect(() => {
      if (!email || !otpCode) {
        navigate("/forgot-password");
      }
    }, [email, otpCode, navigate]);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
      if (token) {
        navigate("/overview");
      }
    }, [token, navigate]);

    const resetPasswordMutation = useMutation({
        mutationFn: async (values: { newPassword: string, confirmPassword: string }) => {
          return apiRequest.post("/users/reset", { 
            email, 
            resetCode: otpCode, 
            password: values.newPassword, 
            confirmPassword: values.confirmPassword
          });
        },
        onSuccess: () => {
            toast.success("Your password has been reset successfully");
            navigate("/");
        },
        onError: (error: any) => {
          console.error("Reset Password Error:", error.response?.data || error.message);
        },
    });

    return (
        <>
        <ToastContainer />
        <div className="min-h-screen flex flex-col lg:flex-row">
            <div className="hidden lg:block w-1/2">
                <OnboardingIntro />
            </div>

            <div className="flex-1 flex items-center justify-center p-4 lg:p-6">
                <div className="w-full max-w-md bg-[#FFFFFF] rounded-lg p-6 lg:p-8">
                    <div className="text-left mb-8">
                        <h2 className="text-2xl font-semibold text-slate-900">Set Your Password!</h2>
                        <p className="text-slate-600 mt-2">Enter Your New Password</p>
                    </div>
                    <Formik
                        initialValues={{ newPassword: "", confirmPassword: "" }}
                        validationSchema={passwordValidationSchema}
                        onSubmit={(values) => resetPasswordMutation.mutate(values)}
                    >
                        {({ handleSubmit }) => (
                            <Form className="space-y-6" onSubmit={handleSubmit}>
                                {/* New Password Field */}
                                <div className="space-y-2">
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <Field
                                            id="newPassword"
                                            name="newPassword"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter New Password"
                                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B4B] focus:border-transparent placeholder:text-slate-400 text-slate-900"
                                            />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                            >
                                            {showPassword ? <LuEye size={16} /> : <LuEyeOff size={16} />}
                                        </button>
                                    </div>
                                    <ErrorMessage name="newPassword" component="p" className="text-red-500 text-sm" />
                                </div>
                                {/* Confirm Password Field */}
                                <div className="space-y-2">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <Field
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm New Password"
                                            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2B4B] focus:border-transparent placeholder:text-slate-400 text-slate-900"
                                            />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                        >
                                            {showConfirmPassword ? <LuEye size={16} /> : <LuEyeOff size={16} />}
                                        </button>
                                    </div>
                                    <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#1a2b4b] text-[#FFFFFF] py-2 px-4 rounded-md hover:bg-[#243b68] transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#1a2b4b] focus:ring-offset-2"
                                    disabled={resetPasswordMutation.isPending}
                                >
                                    {resetPasswordMutation.isPending ? "Resetting..." : "Reset Password"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </>
    );
};

export default ResetPassword;
