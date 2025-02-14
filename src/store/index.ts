import { configureStore } from '@reduxjs/toolkit'

import uiReducer from './uiSlice'
import pinReducer from './pinSlice'
import * as SecureStore from 'expo-secure-store'
import { persistStore, persistReducer } from 'redux-persist'
import { Storage } from 'redux-persist'
import { combineReducers } from 'redux'

const SecureStoreStorage: Storage = {
    getItem: async (key) => {
        const value = await SecureStore.getItemAsync(key)
        return value
    },
    setItem: async (key, value) => {
        await SecureStore.setItemAsync(key, value)
    },
    removeItem: async (key) => {
        await SecureStore.deleteItemAsync(key)
    },
}

const persistConfig = {
    key: 'root',
    storage: SecureStoreStorage,
}


const rootReducer = combineReducers({
    ui: uiReducer,
    pin: pinReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
