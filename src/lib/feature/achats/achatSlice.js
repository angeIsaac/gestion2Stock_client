import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from "@/lib/feature/config";

const achat = axios.create(config);

export const fetchAchats = createAsyncThunk(
    "get/achats",
    async () => {
        try {
            const response = await achat.get("/achats/achat-all");
            return response.data;
        } catch (error) {
            
            throw new error(error.response.data);
        }
    }
);

export const addAchat = createAsyncThunk(
    "add/achat",
    async (data, { rejectWithValue }) => {
        try {
            const response = await achat.post("/achats/creat-achat", data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const deleteAchat = createAsyncThunk(
    "delete/achat",
    async (id, { rejectWithValue }) => {
        try {
            const response = await achat.delete(`/achats/achat/${id}`);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const updateAchat = createAsyncThunk(
    "update/achat",
    async (data, { rejectWithValue }) => {
        try {
            const response = await achat.put(`/achats/achat/update/${data.id}`, data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);



const initialState = {
    achats: [],
    status: 'idle',
    error: null,
    validationError: null
};

const achatSlice = createSlice({
    name: 'achat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAchats.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAchats.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.achats = action.payload;
        })
        .addCase(fetchAchats.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
        // add achat
        .addCase(addAchat.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(addAchat.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.achats.push(action.payload);
        })
        .addCase(addAchat.rejected, (state, action) => {
            state.status = 'failed';
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            state.error = action.payload;
        })
    }
});

export const getAchats = (state) => state.achat.achats;
export const getAchatStatus = (state) => state.achat.status;
export const getAchatError = (state) => state.achat.error;
export const getAchatValidationError = (state) => state.achat.validationError;


export const {} = achatSlice.actions;

export default achatSlice.reducer;