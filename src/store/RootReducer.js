import { combineReducers } from "redux";
import increDec from "./increDec/reducer";
import shopping from "./shopping/reducer";

const prep = combineReducers({
  increDec,
  shopping,
});

export default combineReducers({
  prep,
});
