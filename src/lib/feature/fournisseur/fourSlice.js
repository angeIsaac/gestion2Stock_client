import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    four: [],
    status: "idle",
    error: null,
};

const fourSlice = createSlice({
    name: "fournisseur",
    initialState,
    reducers: {},
});

export const getFournisseurs = (state) => state.fournisseur.four;
export const getFournisseurStatus = (state) => state.fournisseur.status;
export const getFournisseurError = (state) => state.fournisseur.error;

export const {} = fourSlice.actions;

export default fourSlice.reducer;