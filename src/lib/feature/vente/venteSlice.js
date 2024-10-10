import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "@/lib/feature/config";

const vente = axios.create(config);


export const fetchVentes = createAsyncThunk(
    "vente/fetchVentes",
    async () => {
        try {
            const response = await vente.get("/ventes/vente-all");
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

export const addVente = createAsyncThunk(
    "vente/addVente",
    async (data, { rejectWithValue } ) => {
        try {
            const response = await vente.post("/ventes/vente", data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data);
            } 
            else {
                return rejectWithValue("une erreur s'est produite");
            }   
        }
    }
);

export const deleteVente = createAsyncThunk(
    "vente/deleteVente",
    async(id, { rejectWithValue }) => {
        try {
            const response = await vente.delete(`/ventes/remove/${id}`);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data);
            } 
            else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const updateVente = createAsyncThunk(
    "vente/updateVente",
    async (data, { rejectWithValue }) => {
        try {
            const response = await vente.put(`/ventes/update/${data.id}`, data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return rejectWithValue(error.response.data);
            } 
            else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);


const initialState = {
    ventes: [],
    status: "idle",
    error: null,
    validationError: null
    };

const venteSlice = createSlice({
    name: "vente",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // fetchVentes
        .addCase(fetchVentes.pending, (state) => {
            state.status = "loading";
            state.error = null;
            state.validationError = null;
        })
        .addCase(fetchVentes.fulfilled, (state, action) => {
            state.status = "success";
            state.ventes = action.payload;
            state.error = null;
            state.validationError = null;
        })
        .addCase(fetchVentes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
            state.validationError = null;
        })
        // addVente
        .addCase(addVente.pending, (state) => {
            state.status = "loading";
            state.error = null;
            state.validationError = null;
        })
        .addCase(addVente.fulfilled, (state, action) => {
            state.status = "success";
            state.ventes.push(action.payload);
        })
        .addCase(addVente.rejected, (state, action) => {
            state.status = "failed";
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            else{
                state.error = action.payload;
            }
        })
        // deleteVente
        .addCase(deleteVente.pending, (state) => {
            state.status = "loading";
            state.error = null;
            state.validationError = null;
        })
        .addCase(deleteVente.fulfilled, (state, action) => {
            state.status = "success";
            state.ventes = state.ventes.filter((vente) => vente._id !== action.payload._id);
        })
        .addCase(deleteVente.rejected, (state, action) => {
            state.status = "failed";
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            else{
                state.error = action.payload;
            }
        })
        // updateVente
        .addCase(updateVente.pending, (state) => {
            state.status = "loading";
            state.error = null;
            state.validationError = null;
        })
        .addCase(updateVente.fulfilled, (state, action) => {
            state.status = "success";
            state.ventes = state.ventes.map((vente) => {
                if (vente._id === action.payload._id) {
                    return action.payload;
                }
                return vente;
            });
        })
        .addCase(updateVente.rejected, (state, action) => {
            state.status = "failed";
            if(Array.isArray(action.payload)){
                state.validationError = action.payload;
            }
            else{
                state.error = action.payload;
            }
        });
    }
}
);

export const getVentes = (state) => state.vente.ventes;
export const getStatus = (state) => state.vente.status;
export const getError = (state) => state.vente.error;
export const getValidationError = (state) => state.vente.validationError;

export const {} = venteSlice.actions;

export default venteSlice.reducer;