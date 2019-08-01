import uuid from "uuid";

export const addNotification = (
  notificationText,
  color = "sucess",
  type = "notify"
) => {
  const newNotification = {
    text: notificationText,
    color: color,
    id: `notification-${uuid().slice(0, 5)}`,
    type
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
