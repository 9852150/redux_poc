import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import RootReducer from "./RootReducer";
import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer); //RootRuducer-combines all your reducers in your application
//RootReducer-->This is your root reducer that combines all your reducers in your application.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)) //Middleware helps in handling side effects like asynchronous operations, logging, etc., within Redux
);

persistStore(store);

export default store;
// React is connected to the Redux store using the react-redux library,
// which uses the Provider component and hooks (useSelector, useDispatch).
