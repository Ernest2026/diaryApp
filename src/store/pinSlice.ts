import { createSlice } from '@reduxjs/toolkit'

export interface PinState {
    initialPin: string
}

type Action = {
    payload: string
}

const initialState: PinState = {
    initialPin: '',
}

export const pinSlice = createSlice({
    name: 'pin',
    initialState,
    reducers: {
        addInitialPin: (state, action: Action) => {
            state.initialPin = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addInitialPin } = pinSlice.actions

export default pinSlice.reducer
