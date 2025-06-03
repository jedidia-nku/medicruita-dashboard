import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiLoaderCircle } from "react-icons/bi";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import apiRequest from "../../../lib/apiRequest";
import Success from "../success";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../../store/slices/auth";

type VerificationProps = {
  onClose: () => void;
  isOpen: boolean;
  email: string;
  type: "login" | "reset-password";  // ✅ Added prop to determine action
};

const otpSchema = z
  .array(z.string().length(1, "Each digit must be 1 character"))
  .length(6, "OTP must be exactly 6 digits");

const Verification = ({ isOpen, onClose, email, type }: VerificationProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [onSuccess, setOnSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      inputRefs.current[0]?.focus();
    }
  }, [isOpen]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d$/.test(value) && value !== "") return; 

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleClose = () => {
    setOtp(["", "", "", "", "", ""]);
    onClose(); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtpMutation = useMutation({
    mutationFn: async (otpArray: string[]) => {
      otpSchema.parse(otpArray);
      const otpCode = otpArray.join("");

      const endpoint = type === "login" ? "/users/verify-login" : "/users/request"; 
      return apiRequest.post(endpoint, { otp: otpCode, email });
    },
    onSuccess: ({ data }) => {
      const otpCode = otp.join("");
      if (type === "login") {
        dispatch(setAuthData(data)); 
        setTimeout(() => navigate("/overview"), 3000);
      } else {
        setTimeout(() => navigate("/reset-password", { state: { email, otpCode } }), 3000);
      }
      setOnSuccess(true);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "OTP verification failed");
    },
  });

  //resend otp
  const resendOtpMutation = useMutation({
    mutationFn: async () => {
      const endpoint = type === "login" ? "/users/resend-otp" : "/users/reset";
      return apiRequest.post(endpoint, { email });
    },
    onSuccess: () => {
      toast.success("A new OTP has been sent to your email.");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    },
  });
  

  return (
    <>
      <ToastContainer />
      {isOpen && ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {!onSuccess ? (
            <div className="bg-[#FFFFFF] px-8 py-8 rounded-2xl w-full max-w-md relative">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-semibold text-[#1F2937]">Enter OTP To Continue</h1>
                <button onClick={handleClose} className="text-[#5C5F62] text-xl">X</button>
              </div>
              <p className="text-sm text-[#4B5563] text-center">
                Please enter the verification code sent to your email address.
              </p>
              <div className="flex justify-center gap-2 my-6">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) =>{
                      (inputRefs.current[index] = el)}
                    }
                    className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D2B4E] focus:outline-none"
                  />
                ))}
              </div>
              <button
                disabled={verifyOtpMutation.isPending}
                onClick={() => verifyOtpMutation.mutate(otp)}
                className="w-full bg-[#0D2B4E] text-[#FFFFFF] py-2 rounded-lg font-semibold transition-all hover:bg-[#183e68] disabled:bg-[#325379] disabled:cursor-not-allowed"
              >
                {verifyOtpMutation.isPending ? <BiLoaderCircle className="animate-spin mx-auto" /> : "Verify"}
              </button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Didn’t receive the code?{" "}
                  <span
                    className="text-blue-600 font-medium cursor-pointer hover:underline"
                    onClick={() => resendOtpMutation.mutate()}
                  >
                    Resend mail
                  </span>
                </p>
              </div>
          ) : (
            <Success />
          )}
        </div>
      )}
    </>
  );  
};

export default Verification;