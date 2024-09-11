import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { slices } from "./slices/Slices";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, slices.reducer)
export const store = configureStore({
    reducer: {
        app: persistedReducer
    },
})

export const persistor = persistStore(store)  