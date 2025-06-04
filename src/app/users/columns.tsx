"use client";

import Badge from "@/components/ui/badge/Badge";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
// import Badge from "@/components/ui/badge"; // Adjust the path as needed

export type User = {
  user_id: number;
  name: string;
  phone_number: string;
  status: string;
  last_seen: string;
  is_online: boolean;
};

// Status mapping
const mapStatusBadge = (
  status: string
): { label: string; color: "success" | "warning" | "error" } => {
  switch (status.toLowerCase()) {
    case "verified":
      return { label: "Active", color: "success" };
    case "pending_otp":
    case "unverified":
      return { label: "Inactive", color: "warning" };
    case "blocked":
      return { label: "Blocked", color: "error" };
    default:
      console.warn(`Unknown status "${status}", defaulting to Inactive`);
      return { label: "Inactive", color: "warning" };
  }
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { label, color } = mapStatusBadge(row.original.status);
      return <Badge variant="light" color={color}>{label}</Badge>;
    },
  },
  {
    accessorKey: "last_seen",
    header: "Last Seen",
    cell: ({ row }) => {
      const lastSeen = new Date(row.original.last_seen);
      return formatDistanceToNow(lastSeen, { addSuffix: true });
    },
  },
  {
    accessorKey: "is_online",
    header: "Online",
    cell: ({ row }) => (
      <span className={row.original.is_online ? "text-green-600" : "text-red-600"}>
        {row.original.is_online ? "Yes" : "No"}
      </span>
    ),
  },
];
