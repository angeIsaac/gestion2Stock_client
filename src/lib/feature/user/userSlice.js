import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { config } from "@/lib/feature/config";
import axios from "axios";

const user = axios.create(config);

export const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await user.post("/user", data);
            return response.data;
        } catch (error) {
            if(error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data.errors);
            }
            else{
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const register = createAsyncThunk(
    'user/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await user.post(`/register`, data);
            return response.data;
        } catch (error) {
            if(error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data.errors);
            }
            else{
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await user.post(`/logout`);
            return response.data;
        } catch (error) {
            return rejectWithValue("une erreur s'est produite");
        }
    }
);

const initialState = {
    user: {},
    status: 'idle',
    error: null,
    validationError: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.status = "failed";
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            else{
                state.error = action.payload;
            }
        })
        // logout
        .addCase(logout.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = {};
        })
        .addCase(logout.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        // register
        .addCase(register.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
            state.status = "failed";
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            else{
                state.error = action.payload;
            }
        })
    }
});

export const getUser = (state) => state.user.user;
export const getStatus = (state) => state.user.status;
export const getError = (state) => state.user.error;

export const {} = userSlice.actions;

export default userSlice.reducer;