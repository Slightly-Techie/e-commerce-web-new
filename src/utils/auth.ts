import axios from "axios";

/**
 * Checks if a token exists and is valid by making a verification request to the API
 * @param token - The auth token to validate
 * @param id - The user ID associated with the token
 * @returns A promise that resolves to boolean indicating if the token is valid
 */
export async function validateToken(
  token?: string,
  id?: string,
): Promise<boolean> {
  if (!token || !id) {
    return false;
  }

  try {
    const response = await axios.get("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      validateStatus: () => true,
    });

    // If response status is 200, the token is valid
    return response.status === 200;
  } catch (error) {
    console.error("Token validation error:", error);
    return false;
  }
}

/**
 * Checks if the user is authenticated based on cookies
 * @param cookies - The cookies containing auth information
 * @returns A promise that resolves to boolean indicating if user is authenticated
 */
export async function isAuthenticated(cookies: {
  token?: string;
  id?: string;
  refreshToken?: string;
}): Promise<boolean> {
  return await validateToken(cookies.token, cookies.id);
}
