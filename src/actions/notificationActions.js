import uuid from "uuid";

export const addNotification = notificationText => {
  const newNotification = {
    text: notificationText,
    id: `notification-${uuid().slice(0, 5)}`
  };

  return {
    type: "ADD_NOTIFICATION",
    payload: newNotification
  };
};

export const removeNotification = id => {
  return {
    type: "REMOVE_NOTIFICATION",
    payload: id
  };
};
