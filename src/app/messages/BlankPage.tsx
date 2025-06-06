// src/app/messages/BlankPage.tsx
"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React, { useEffect, useState } from "react";
import { fetchMessages } from "../services/apiService";
import { DataTable } from "@/components/ui/data-table/data-table"; // Adjust path
import { ColumnDef } from "@tanstack/react-table";
// import { Button } from "@/components/ui/button"; // Adjust path
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import Button from "@/components/ui/button/Button";

// Define the ApiMessage type based on apiService.ts
interface ApiMessage {
  message_id: number;
  sender: string;
  recipient: string;
  message: string;
  timestamp: string;
  status: string;
  actions: string[];
}

// Define columns for the DataTable
const columns: ColumnDef<ApiMessage>[] = [
  {
    accessorKey: "message_id",
    header: ({ column }) => (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>ID</span>
        {{
          asc: <ArrowUp className="h-4 w-4" />,
          desc: <ArrowDown className="h-4 w-4" />,
          false: <ArrowUpDown className="h-4 w-4" />,
        }[column.getIsSorted() as string] || <ArrowUpDown className="h-4 w-4" />}
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue("message_id")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "sender",
    header: ({ column }) => (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Sender</span>
        {{
          asc: <ArrowUp className="h-4 w-4" />,
          desc: <ArrowDown className="h-4 w-4" />,
          false: <ArrowUpDown className="h-4 w-4" />,
        }[column.getIsSorted() as string] || <ArrowUpDown className="h-4 w-4" />}
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue("sender")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "recipient",
    header: ({ column }) => (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Recipient</span>
        {{
          asc: <ArrowUp className="h-4 w-4" />,
          desc: <ArrowDown className="h-4 w-4" />,
          false: <ArrowUpDown className="h-4 w-4" />,
        }[column.getIsSorted() as string] || <ArrowUpDown className="h-4 w-4" />}
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue("recipient")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => <div className="truncate max-w-xs">{row.getValue("message")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Timestamp</span>
        {{
          asc: <ArrowUp className="h-4 w-4" />,
          desc: <ArrowDown className="h-4 w-4" />,
          false: <ArrowUpDown className="h-4 w-4" />,
        }[column.getIsSorted() as string] || <ArrowUpDown className="h-4 w-4" />}
      </div>
    ),
    cell: ({ row }) => (
      <div>{new Date(row.getValue("timestamp")).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span>Status</span>
        {{
          asc: <ArrowUp className="h-4 w-4" />,
          desc: <ArrowDown className="h-4 w-4" />,
          false: <ArrowUpDown className="h-4 w-4" />,
        }[column.getIsSorted() as string] || <ArrowUpDown className="h-4 w-4" />}
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
    enableSorting: true,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const actions = row.original.actions;
      return (
        <div className="flex gap-2">
          {actions.includes("view") && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => alert(`View message ${row.getValue("message_id")}`)}
            >
              View
            </Button>
          )}
          {actions.includes("delete") && (
            <Button
              variant="outline"
              size="sm"
              className="text-red-500 border-red-500 hover:bg-red-50"
              onClick={() => alert(`Delete message ${row.getValue("message_id")}`)}
            >
              Delete
            </Button>
          )}
        </div>
      );
    },
    enableSorting: false,
  },
];

export default function BlankPage() {
  const [messages, setMessages] = useState<ApiMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch messages
  const loadMessages = async () => {
    setLoading(true);
    try {
      const response = await fetchMessages();
      setMessages(response);
      setLoading(false);
    } catch {
      setError("Failed to fetch messages. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div>
      <PageBreadcrumb pageTitle="Messages" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[1200px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Messages
          </h3>
          {loading && <p className="text-gray-500">Loading messages...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <DataTable columns={columns} data={messages} />
          )}
        </div>
      </div>
    </div>
  );
}