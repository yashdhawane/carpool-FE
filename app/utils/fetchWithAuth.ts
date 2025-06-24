// utils/fetchWithAuth.ts
export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  // Attach access token to headers
  const authHeaders = {
    ...options.headers,
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    "Content-Type": "application/json",
  };

  let res = await fetch(url, { ...options, headers: authHeaders });

  // If access token expired, try to refresh
  if (res.status === 403 && refreshToken) {
    // Try to refresh the token
    const refreshRes = await fetch("http://localhost:3001/v1/auth/refresh-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (refreshRes.ok) {
      const data = await refreshRes.json();
      // Save new tokens
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Retry original request with new access token
      const retryHeaders = {
        ...options.headers,
        Authorization: `Bearer ${data.accessToken}`,
        "Content-Type": "application/json",
      };
      res = await fetch(url, { ...options, headers: retryHeaders });
    } else {
      // Refresh failed, log out user
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      throw new Error("Session expired. Please log in again.");
    }
  }

  return res;
}