"use client";
import React, { useState, useRef } from "react";

const OtpForm = ({ onVerify }: { onVerify: (otp: string) => void }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        inputsRef.current[index - 1]?.focus();
      } else {
        const updatedOtp = [...otp];
        updatedOtp[index] = "";
        setOtp(updatedOtp);
      }
    }

    if (e.key === "ArrowLeft") {
      inputsRef.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" || e.key === "Enter") {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerifyClick = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length === 6) {
      onVerify(finalOtp);
    } else {
      alert("Please enter all 6 digits");
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-center text-white text-2xl font-orbitron">
        Enter the 6-digitMagic Code
      </h3>
      <div className="flex justify-center space-x-3 mt-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-14 text-center text-lg font-bold text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        ))}
      </div>

      <button
        onClick={handleVerifyClick}
        className="mt-10 mx-auto block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold font-sora transition-all duration-200"
      >
        Verify Code
      </button>
      <p className="text-center text-sm text-gray-300 mt-3 font-sora text-balance">
        Check your email for the OTP we sent. If you want to resend the code{" "}
        <span className="font-inter text-indigo-400 font-light underline underline-offset-4">
          CLick Here
        </span>
      </p>
    </div>
  );
};

export default OtpForm;
