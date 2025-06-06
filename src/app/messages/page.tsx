// src/app/messages/page.tsx
import { Metadata } from "next";
import BlankPage from "./BlankPage";
// import BlankPage from "./BlankPage"; // Adjust path if needed

// Metadata for the page
export const metadata: Metadata = {
  title: "Messages | TailAdmin - Next.js Dashboard Template",
  description: "View and manage messages in TailAdmin Dashboard Template",
};

export default function Page() {
  return <BlankPage />;
}