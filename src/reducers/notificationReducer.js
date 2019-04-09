const initialState = {
  notifications: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        notifications: [...state.notifications, action.payload]
      };

    case "REMOVE_NOTIFICATION":
      return {
        notifications: [
          ...state.notifications.filter(
            notification => notification.id !== action.payload
          )
        ]
      };

    default:
      return state;
  }
}
