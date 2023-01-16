import { createSlice } from '@reduxjs/toolkit'

export interface UiState {
    darkMode: boolean
    isLoggedIn: boolean
}

const initialState: UiState = {
    darkMode: false,
    isLoggedIn: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
        changeMode: (state) => {
            state.darkMode = !state.darkMode
        },
    },
})

// Action creators are generated for each case reducer function
export const { logIn, changeMode } = uiSlice.actions

export default uiSlice.reducer
