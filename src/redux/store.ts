import { configureStore } from "@reduxjs/toolkit";
import { FoodAPI } from "../api/FoodAPI";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bookmarkSlice } from "./reducer/BookMarkReducer";


export const store = configureStore({
    reducer:{
[FoodAPI.reducerPath]:FoodAPI.reducer,
bookMarkReducer: bookmarkSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(FoodAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDistPath = typeof store.dispatch
export const useAppDispatch: () => AppDistPath = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
