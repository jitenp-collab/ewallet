import { configureStore } from "@reduxjs/toolkit";
import routenameReducer from "../reducers/reducers"

export const store = configureStore({
    reducer: {
        routeName: routenameReducer
    }
})

export type StoreState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch