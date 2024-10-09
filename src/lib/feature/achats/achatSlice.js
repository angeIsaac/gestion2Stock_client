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
            if (error.response) {
                return error.response.data;
            } else if (error.request) {
                return error.request;
            } else {
                return error.message;
            }
        }
    }
);

export const addAchat = createAsyncThunk(
    "add/achat",
    async data => {
        try {
            const response = await achat.post("/achats/creat-achat", data);
            return response.data;
        } catch (error) {
            if (error.response) {
                return error.response.data;
            } else if (error.request) {
                return error.request;
            } else {
                return error.message;
            }
        }
    }
);

export const deleteAchat = createAsyncThunk(
    "delete/achat",
    async id => {
        try {
            const response = await achat.delete(`/achats/achat/${id}`);
            return response.data;
        } catch (error) {
            if (error.response) {
                return error.response.data;
            } else if (error.request) {
                return error.request;
            } else {
                return error.message;
            }
        }
    }
);

export const updateAchat = createAsyncThunk(
    "update/achat",
    async data => {
        try {
            const response = await achat.put(`/achats/achat/update/${data.id}`, data);
            return response.data;
        } catch (error) {
            if (error.response) {
                return error.response.data;
            } else if (error.request) {
                return error.request;
            } else {
                return error.message;
            }
        }
    }
);



const initialState = {
    achats: [],
    status: 'idle',
    error: null,
};

const achatSlice = createSlice({
    name: 'achat',
    initialState,
    reducers: {},
});

export const getAchats = (state) => state.achat.achats;
export const getAchatStatus = (state) => state.achat.status;
export const getAchatError = (state) => state.achat.error;


export const {} = achatSlice.actions;

export default achatSlice.reducer;