import uuid from "uuid";

export const addNotification = (notificationText, color = "sucess") => {
  const newNotification = {
    text: notificationText,
    color: color,
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
