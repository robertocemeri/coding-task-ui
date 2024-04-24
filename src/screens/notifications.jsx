import React, { useEffect, useState } from "react";
import { getMyNotifications, readAllMyNotifications } from "../api";

export default function Notifications() {
  useEffect(() => {
    loadPageData();
  }, []);
  const [notifications, setNotifications] = useState([]);
  const loadPageData = async () => {
    getMyNotifications().then((res) => {
      setNotifications(res.data);
    });

    readAllMyNotifications();
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex h-100 mb-2">
          {notifications?.length > 0 ? (
            notifications.map((notification) => (
              <div
                className={` d-flex flex-column border  
                ${notification.is_read === 0 ? "bg-secondary" : "bg-light"}`}
                key={notification.id}
              >
                <span
                  className={` py-2
                    ${notification.is_read === 0 ? "text-light" : "text-dark"}`}
                >
                  {notification.text}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center">You have not notifications yet!</p>
          )}
        </div>
      </div>
    </section>
  );
}
