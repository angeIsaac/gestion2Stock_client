"use client";

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from "@/lib/feature/config";

const produit = axios.create(config);

export const fetchProduits = createAsyncThunk(
    "get/produits", 
    async () => {
        try {
            const response = await produit.get("/products/product-all");
            return response.data;
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            else if(error.request){
                return error.request;
            }
            else{
                return error.message;
            }
        }
    }
);

export const updateProduit = createAsyncThunk(
    "update/produit",
    async data => {
        try {
            const response = await produit.put(`/products/product/${data.id}`, data);
            return response.data;
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            else if(error.request){
                return error.request;
            }
            else{
                return error.message;
            }
        }
    }
);

export const deleteProduit = createAsyncThunk(
    "delete/produit",
    async id => {
        try {
            const response = await produit.delete(`/products/product/${id}`);
            return response.data;
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            else if(error.request){
                return error.request;
            }
            else{
                return error.message;
            }
        }
    }
);

export const addProduit = createAsyncThunk(
    "add/produit",
    async data => {
        try {
            const response = await produit.post("/products/product", data);
            return response.data;
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            else if(error.request){
                return error.request;
            }
            else{
                return error.message;
            }
        }
    }
);

export const searchProduit = createAsyncThunk(
    "search/produit",
    async data => {
        try {
            const response = await produit.get(`/products/search/${data}`);
            return response.data;
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            else if(error.request){
                return error.request;
            }
            else{
                return error.message;
            }
        }
    }
);

export const getProduitById = createAsyncThunk(
    "get/produit",
    async id => {
        try {
            const response = await produit.get(`/products/query/${id}`);
            return response.data;
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            else if(error.request){
                return error.request;
            }
            else{
                return error.message;
            }
        }
    }
);


const initialState = {
    produits: [],
    status: 'idle',
    error: null
};

const produitSlice = createSlice({
    name: 'produit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch produits
            .addCase(fetchProduits.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduits.fulfilled, (state, action) => {
                state.produits = action.payload;
                state.status = 'success';
            })
            .addCase(fetchProduits.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // update produit
            .addCase(updateProduit.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProduit.fulfilled, (state, action) => {
                state.status = 'success';
                state.produits = state.produits.map(produit => {
                    if(produit._id === action.payload.id){
                        return action.payload;
                    }
                    return produit;
                });
            })
            .addCase(updateProduit.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // delete produit
            .addCase(deleteProduit.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProduit.fulfilled, (state, action) => {
                state.status = 'success';
                state.produits = state.produits.filter(produit => produit._id !== action.payload.id);
            })
            .addCase(deleteProduit.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // add produit
            .addCase(addProduit.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProduit.fulfilled, (state, action) => {
                state.status = 'success';
                state.produits.push(action.payload);
            })
            .addCase(addProduit.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        
    }
});

export const getProduits = (state) => state.produit.produits;
export const getStatus = (state) => state.produit.status;
export const getError = (state) => state.produit.error;

export const {} = produitSlice.actions;

export default produitSlice.reducer;