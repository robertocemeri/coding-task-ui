import { useEffect, useState } from "react";

import StorageService from "../services/StorageService";

const Storage = new StorageService();

const useAuth = () => {
  const authUser = Storage.getUser();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  console.log(authUser);
  useEffect(() => {
    if (authUser) {
      setIsUserLoggedIn(true);
      return;
    }

    let token = Storage.getToken();

    if (token !== null) {
      setIsUserLoggedIn(true);
      return;
    }

    setIsUserLoggedIn(false);
  }, [authUser]);

  return {
    isUserLoggedIn,
  };
};

export default useAuth;
