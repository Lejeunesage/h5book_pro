export const isAuthenticated = (): boolean => {
    const accessToken = localStorage.getItem("access_token");
    return !!accessToken;
  };
  