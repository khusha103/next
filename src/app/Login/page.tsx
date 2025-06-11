// src/app/Login/page.tsx
"use client";
import Label from "@/components/form/Label";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { login } from "../services/authService";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const token = await login({ email, password });
      Cookies.set("auth_token", token, {
        expires: 1,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-light-gray overflow-hidden">
      <div className="absolute inset-0 bg-cream-200 bg-opacity-30 border-t-2 border-b-2 border-gold-600"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white border-2 border-gold-500 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <h2 className="text-4xl font-serif text-gold-800 tracking-wide">Telldemm</h2>
        </div>
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-serif font-semibold text-darkwood-800">Admin Panel Login</h1>
          <p className="text-sm text-darkwood-600 mt-2 font-serif italic">
            Access the Telldemm admin dashboard
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && (
            <div className="text-center text-sm text-red-600 bg-red-100 p-2 rounded-md">
              {error}
            </div>
          )}
          {loading && (
            <div className="text-center text-sm text-darkwood-600">Logging in...</div>
          )}
          <div>
            <Label htmlFor="email" className="block text-darkwood-700 font-serif font-medium mb-1">
              Email
            </Label>
            <input
              id="email"
              placeholder="admin@telldemm.com"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full p-3 border-2 border-darkwood-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition bg-cream-50 text-darkwood-800 font-serif placeholder-darkwood-400"
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="password" className="block text-darkwood-700 font-serif font-medium mb-1">
              Password
            </Label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="w-full p-3 border-2 border-darkwood-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition bg-cream-50 text-darkwood-800 font-serif placeholder-darkwood-400"
              disabled={loading}
            />
          </div>
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-gold-700 hover:text-gold-900 font-serif italic transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-gold-500 rounded"
            >
              Forgot Password?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-darkwood-700 text-cream-100 rounded-md hover:bg-darkwood-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors font-serif text-lg tracking-wide active:bg-darkwood-900 disabled:bg-darkwood-400 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        :root {
          --light-gray: #F7FAFC;
          --whale-blue: #2D3E50;
          --cream-200: #FAEBD7;
          --cream-50: #FFF8E7;
          --gold-500: #E0C14B;
          --gold-600: #D4AF37;
          --gold-700: #C19A2E;
          --gold-800: #B8860B;
          --gold-900: #A67C00;
          --darkwood-300: #8B5A2B;
          --darkwood-400: #704A24;
          --darkwood-600: #5C4033;
          --darkwood-700: #4A3728;
          --darkwood-800: #3B2A1F;
          --darkwood-900: #2C1F16;
        }
      `}</style>
    </div>
  );
}