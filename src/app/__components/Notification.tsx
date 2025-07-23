"use client";
import React, { useEffect } from "react";

export enum NotificationType {
  SUCCESS,
  ERROR,
  INFO,
}

export type Notification = {
  id: string;
  message: string;
  type?:
    | NotificationType.SUCCESS
    | NotificationType.ERROR
    | NotificationType.INFO;
};

type Props = {
  notifications: Notification[];
  removeNotification: (id: string) => void;
};

export default function NotificationList({
  notifications,
  removeNotification,
}: Props) {
  useEffect(() => {
    notifications.forEach((notify) => {
      const timer = setTimeout(() => removeNotification(notify.id), 3000);
      return () => clearTimeout(timer);
    });
  }, [notifications, removeNotification]);

  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          style={{
            marginBottom: 10,
            padding: 16,
            borderRadius: 8,
            background:
              notif.type === NotificationType.ERROR
                ? "#ffcccc"
                : notif.type === NotificationType.SUCCESS
                ? "#ccffcc"
                : "#cce5ff",
            color: "#333",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {notif.message}
          <button
            style={{ marginLeft: 10 }}
            onClick={() => removeNotification(notif.id)}
          >
            Đóng
          </button>
        </div>
      ))}
    </div>
  );
}
