"use client";

import { ColumnDef } from "@tanstack/react-table";

// Define the shape of your data
export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

// Define the columns
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];