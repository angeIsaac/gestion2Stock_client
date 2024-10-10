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
            throw new Error(error.response.data);
        }
    }
);

export const updateProduit = createAsyncThunk(
    "update/produit",
    async (data, { rejectWithValue }) => {
        try {
            const response = await produit.put(`/products/product/${data.id}`, data);
            return response.data;
        } catch (error) {
            if(error.response && error.response.status === 400){
                return rejectWithValue(error.response.data);
            }
            else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const deleteProduit = createAsyncThunk(
    "delete/produit",
    async (id, { rejectWithValue }) => {
        try {
            const response = await produit.delete(`/products/product/${id}`);
            return response.data;
        } catch (error) {
            if(error.response && error.response.status === 400){
                return rejectWithValue(error.response.data);
            }
            else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const addProduit = createAsyncThunk(
    "add/produit",
    async (data, { rejectWithValue }) => {
        try {
            const response = await produit.post("/products/product", data);
            return response.data;
        } catch (error) {
            if(error.response && error.response.status === 400){
                return rejectWithValue(error.response.data);
            }
            else {
                return rejectWithValue("une erreur s'est produite");
            }
        }
    }
);

export const searchProduit = createAsyncThunk(
    "search/produit",
    async (data, { rejectWithValue }) => {
        try {
            const response = await produit.get(`/products/search/${data}`);
            return response.data;
        } catch (error) {
            if(error.response && error.response.status === 400){
                return rejectWithValue(error.response.data);
            }
            else {
                return rejectWithValue("une erreur s'est produite");
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
    error: null,
    validationEroor: null
};

const produitSlice = createSlice({
    name: 'produit',
    initialState,
    reducers: {},
    
});

export const getProduits = (state) => state.produit.produits;
export const getStatus = (state) => state.produit.status;
export const getError = (state) => state.produit.error;
export const getValidationError = (state) => state.produit.validationEroor;

export const {} = produitSlice.actions;

export default produitSlice.reducer;