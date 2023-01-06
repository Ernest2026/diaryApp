import { createSlice } from '@reduxjs/toolkit'

export interface UiState {
    isLoggedIn: boolean
}

const initialState: UiState = {
    isLoggedIn: true,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
    },
})

// Action creators are generated for each case reducer function
export const { logIn } = uiSlice.actions

export default uiSlice.reducer
