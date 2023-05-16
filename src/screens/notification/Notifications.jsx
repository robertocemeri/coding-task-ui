import React, { useEffect, useState } from "react";
import { getMyNotifications, readAllMyNotifications } from "../../api";

export default function Notifications() {
  useEffect(() => {
    loadPageData();
  }, []);
  const [notifications, setNotifications] = useState([]);
  const loadPageData = async () => {
    getMyNotifications().then((res) => {
      setNotifications(res.data);
    });
    setTimeout(function () {
      readAllMyNotifications();
    }, 5000);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex h-100">
          {notifications?.length > 0 ? (
            notifications.map((notification) => (
              <div className="d-flex flex-column" key={notification.id}>
                <p
                  className={
                    notification.is_read === 0
                      ? "text-success"
                      : "text-secondary"
                  }
                >
                  {notification.text}
                </p>
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
