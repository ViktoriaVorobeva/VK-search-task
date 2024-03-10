import { ApiResponce } from "../types";
import { BASE_URL } from "./constants";

export const request = (value: string): Promise<ApiResponce> => {
  return fetch(`${BASE_URL}?q=${value}`).then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  });
};

export const inputHandler = async (value: string) => {
  try {
    const users = await request(value);
    return users.users;
  } catch {
    throw new Error("fetch error");
  }
};
