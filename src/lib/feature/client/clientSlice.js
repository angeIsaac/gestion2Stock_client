import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { config } from "@/lib/feature/config";
import axios from 'axios';


const client = axios.create(config);

export const fetchClients = createAsyncThunk(
    "get/clients",
    async () => {
        try {
            const response = await client.get("/clients/getclient-all");
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

export const addClient = createAsyncThunk(
    "add/client",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.post("/clients/create", data);
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

export const deleteClient = createAsyncThunk(
    "delete/client",
    async (id, { rejectWithValue }) => {
        try {
            const response = await client.delete(`/clients/delete/${id}`);
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

export const updateClient = createAsyncThunk(
    "update/client",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.put(`/clients/update/${data.id}`, data);
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
    clients: [],
    status: 'idle',
    error: null,
    validationError: null
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchClients.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(fetchClients.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.clients = action.payload;
        })
        .addCase(fetchClients.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        // add client
        .addCase(addClient.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(addClient.fulfilled, (state, action) => {
            state.status = 'success';
            state.clients.push(action.payload);
        })
        .addCase(addClient.rejected, (state, action) => {
            state.status = 'failed';
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            state.error = action.payload;
        })
        // delete client
        .addCase(deleteClient.pending, (state) => {
            state.status = 'loading';
            state.error = null,
            state.validationError = null;
        })
        .addCase(deleteClient.fulfilled, (state, action) => {
            state.status = 'success';
            state.clients = state.clients.filter(client => client._id !== action.payload);
        })
        .addCase(deleteClient.rejected, (state, action) => {
            state.status = 'failed';
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            state.error = action.payload;
        })
        // update client
        .addCase(updateClient.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationError = null;
        })
        .addCase(updateClient.fulfilled, (state, action) => {
            state.status = 'success';
            state.clients = state.clients.map(client => {
                if(client._id === action.payload._id){
                    return action.payload;
                }
                return client;
            });
        })
        .addCase(updateClient.rejected, (state, action) => {
            state.status = 'failed';
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            state.error = action.payload;
        })
    }
});

export const getClients = (state) => state.client.clients;
export const getClientStatus = (state) => state.client.status;
export const getClientError = (state) => state.client.error;
export const getClientValidationError = (state) => state.client.validationError;

export const {} = clientSlice.actions;

export default clientSlice.reducer;