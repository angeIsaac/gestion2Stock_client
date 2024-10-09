import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import useReducer from "@/lib/feature/user/userSlice"
import venteReducer from "@/lib/feature/vente/venteSlice"
import produitReducer from "@/lib/feature/produit/produitSlice"
import fouReducer from "@/lib/feature/fournisseur/fourSlice"
import clientReducer from "@/lib/feature/client/clientSlice"
import achatsReducer from "@/lib/feature/achats/achatSlice"
import globalState from "@/lib/feature/globalState";

const rootReducer = combineReducers({
    user: useReducer,
    vente: venteReducer,
    produit: produitReducer,
    fournisseur: fouReducer,
    client: clientReducer,
    achat: achatsReducer,
    global: globalState
})


export const makeStore = () => {

    return configureStore({
        reducer: rootReducer
    })
}