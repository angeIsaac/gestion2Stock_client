import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: [],
    status: 'idle',
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const getUser = (state) => state.user.user;

export const {} = userSlice.actions;

export default userSlice.reducer;