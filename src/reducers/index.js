import { combineReducers } from "redux";
import floaterReducer from "./floaterReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  floater: floaterReducer,
  notification: notificationReducer
});
