import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { MoviesReducer } from "../reducer/MoviesReducer";


export const store=createStore(MoviesReducer,applyMiddleware(thunk));