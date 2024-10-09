import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    async data => {
        try {
            const response = await vente.post("/ventes/vente", data);
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

export const deleteVente = createAsyncThunk(
    "vente/deleteVente",
    async id => {
        try {
            const response = await vente.delete(`/ventes/remove/${id}`);
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

export const updateVente = createAsyncThunk(
    "vente/updateVente",
    async data => {
        try {
            const response = await vente.put(`/ventes/update/${data.id}`, data);
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
    ventes: [],
    status: "idle",
    error: null,
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
        })
        .addCase(fetchVentes.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.ventes = action.payload;
        })
        .addCase(fetchVentes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // addVente
        .addCase(addVente.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addVente.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.ventes.push(action.payload);
        })
        .addCase(addVente.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // deleteVente
        .addCase(deleteVente.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteVente.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.ventes = state.ventes.filter((vente) => vente._id !== action.payload._id);
        })
        .addCase(deleteVente.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // updateVente
        .addCase(updateVente.pending, (state) => {
            state.status = "loading";
        })
        .addCase(updateVente.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.ventes = state.ventes.map((vente) => {
                if (vente._id === action.payload._id) {
                    return action.payload;
                }
                return vente;
            });
        })
        .addCase(updateVente.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
}
);

export const getVentes = (state) => state.vente.ventes;
export const getStatus = (state) => state.vente.status;
export const getError = (state) => state.vente.error;

export const {} = venteSlice.actions;

export default venteSlice.reducer;