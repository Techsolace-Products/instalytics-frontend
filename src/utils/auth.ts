export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const logout = (): void => {
  localStorage.removeItem("accessToken");
};
