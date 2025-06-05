// app/(dashboard)/users/page.tsx or wherever your route lives
"use client";

import React, { useEffect, useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { columns, User } from "./columns";
import { DataTable } from "@/components/ui/data-table/data-table";
// import { fetchMessages, fetchUsers } from "../services/userService";
import { fetchUsers } from "../services/userService";

// import { fetchUsers } from "@/services/userService";

export default function UserTablePage() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const apiUsers = await fetchUsers();
        // const apiMessages = await fetchMessages();



        // Map API data to local `User` type
        const mappedUsers: User[] = apiUsers.map((apiUser) => ({
          user_id: apiUser.user_id,
          name: apiUser.name,
          phone_number: apiUser.phone_number,
          status: apiUser.status,
          last_seen: apiUser.last_seen,
          is_online: apiUser.is_online,
        }));

        setData(mappedUsers);
      // } catch (err) {
      } catch (err) {
        console.error(err); // or log it for debugging
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <div>
      <PageBreadcrumb pageTitle="User Table" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[1140px]">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Users
          </h3>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </div>
  );
}
