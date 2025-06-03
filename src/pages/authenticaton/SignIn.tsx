import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import OnboardingIntro from "../../components/onBoarding/OnboardingIntro";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../validations/authValidations/AuthValidation";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apiRequest from "../../lib/apiRequest";


const SignIn = () => {
  const { token } = useAppSelector((state: any) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  // const [userEmail, setUserEmail] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/overview");
    }
  }, [token, navigate]);


  // React Query Mutation for login
  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = await apiRequest.post("/users/login", credentials);
      return response.data;
    },
    onSuccess: (email) => {
      if (email) {
        // setUserEmail(email);
      }
    },
    onError: (error: any) => {
      console.error("Login error:", error.response?.data || error.message);
    },
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      loginMutation.mutate(values);
    },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row md:justify-center items-center bg-gradient-to-t from-[#1E63B41A] to-[#244266] lg:bg-none">
        <div className="hidden lg:block w-1/2">
          <OnboardingIntro />
        </div>
        <div className="flex justify-start items-center w-full lg:w-1/2">
          <div className="bg-[#FFFFFF] py-8 px-6 rounded-2xl w-[90%] md:w-[60%]">
            <div className="flex gap-4 items-center justify-end">
              <p className="text-[#4640DE]">Employer</p>
              <p className="text-[#4640DE] bg-[#E9EBFD] p-2 rounded-md">Health Worker</p>
            </div>
            <div className="w-full flex-1 mt-3">
            <div className="flex flex-col items-center">
                <button
                    className="w-full max-w-2xs font-bold shadow-sm rounded-sm py-2 border border-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                            <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                fill="#4285f4" />
                            <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853" />
                            <path
                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                fill="#fbbc04" />
                            <path
                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                fill="#ea4335" />
                        </svg>
                    </div>
                    <span className="ml-4 text-[#4640DE]">
                        Sign Up with Google
                    </span>
                </button>
            </div>

            <div className="my-3 border-b text-center">
                <div
                    className="leading-none px-2 inline-block text-sm text-[#202430] opacity-50 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with email
                </div>
            </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-2">
              <div className="mb-4">
                <label className="text-[#4B5563] font-semibold block mb-1">Full name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
              </div>
              {/* Email Input */}
              <div>
                <label className="text-[#4B5563] font-semibold block mb-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="text-[#4B5563] font-semibold block mb-1">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <span
                    className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEye className="text-[#292B33]" /> : <FiEyeOff className="text-[#292B33]" />}
                  </span>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-[#4B5563] font-semibold block mb-1">Cadre</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Nurse, Doctor etc"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="text-[#4B5563] font-semibold block mb-1">Licence Number</label>
                  <input
                    id="text"
                    name="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4640DE] font-inter text-[#FFFFFF] py-2 rounded-sm"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Creating..." : "Create"}
              </button>
              
              {/* Stay Signed In */}
              <div className="flex justify-between items-center py-4">
                <div className="flex flex-col">
                  <p className="text-[#4B5563] text-sm">
                    Already have an account? <span className="ml-2 text-[#4640DE]">Login</span>
                  </p>
                  <p className="py-4 text-[#7C8493] text-sm">By clicking 'Continue', you acknowledge that you have read and accept the <span className="text-[#4640DE]">Terms of Service</span> and <span className="text-[#4640DE]">Privacy Policy</span>.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
