import { combineReducers } from "redux";
import floaterReducer from "./floaterReducer";
import notificationReducer from "./notificationReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  floater: floaterReducer,
  notification: notificationReducer,
  ui: uiReducer
});
