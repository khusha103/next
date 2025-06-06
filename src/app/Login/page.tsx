"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Link from "next/link";
import React from "react";

export default function SignInForm() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 animate-gradient"></div>
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 w-full max-w-md p-10 bg-white rounded-xl shadow-2xl">
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 animate-pulse">Telldemm</h2>
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Panel Login</h1>
          <p className="text-sm text-gray-500 mt-2">
            Access the Telldemm admin dashboard
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <Label className="block text-gray-700 font-medium mb-1">Email</Label>
            <Input
              placeholder="admin@telldemm.com"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105"
            />
          </div>
          <div>
            <Label className="block text-gray-700 font-medium mb-1">Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105"
            />
          </div>
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-700 transition-colors hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div>
            <button
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95"
            >
              Log In
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0.2;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}