import { ApiResponse } from "@/helpers/ApiResponse";

export const getAllHandicraftItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/handicraft/get`
  );
  const data = await response.json();
  return data as ApiResponse;
};
