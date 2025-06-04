// services/userService.ts
import axios from "axios";
import Cookies from "js-cookie"; // Make sure this is installed: npm i js-cookie

export type ApiUser = {
  user_id: number;
  name: string;
  phone_number: string;
  email: string | null;
  profile_picture_url: string | null;
  status: string;
  created_at: string;
  public_key: string | null;
  key_created_at: string | null;
  last_seen: string;
  is_online: boolean;
};

const API_BASE_URL = "https://telldemm-backend.onrender.com";

const getAuthHeaders = () => {
  const token = Cookies.get("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchUsers = async (): Promise<ApiUser[]> => {
  try {
    const response = await axios.get<ApiUser[]>(`${API_BASE_URL}/admin/users`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch users. Please try again.");
  }
};
