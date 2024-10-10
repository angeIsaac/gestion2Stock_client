extraReducers: (builder) => {
    builder
        // fetch produits
        .addCase(fetchProduits.pending, (state) => {
            state.status = 'loading';
            state.validationEroor = null,
                error = null;
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
            state.error = null;
            state.validationEroor = null;
        })
        .addCase(updateProduit.fulfilled, (state, action) => {
            state.status = 'success';
            state.produits = state.produits.map(produit => {
                if (produit._id === action.payload.id) {
                    return action.payload;
                }
                return produit;
            });
        })
        .addCase(updateProduit.rejected, (state, action) => {
            state.status = 'failed';
            if (Array.isArray(action.payload)) {
                state.validationEroor = action.payload;
            }
            else {
                state.error = action.payload;
            }
        })
        // delete produit
        .addCase(deleteProduit.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationEroor = null;
        })
        .addCase(deleteProduit.fulfilled, (state, action) => {
            state.status = 'success';
            state.produits = state.produits.filter(produit => produit._id !== action.payload.id);
        })
        .addCase(deleteProduit.rejected, (state, action) => {
            state.status = 'failed';
            if (Array.isArray(action.payload)) {
                state.validationEroor = action.payload;
            }
            else {
                state.error = action.payload;
            }
        })
        // add produit
        .addCase(addProduit.pending, (state) => {
            state.status = 'loading';
            state.error = null;
            state.validationEroor = null;
        })
        .addCase(addProduit.fulfilled, (state, action) => {
            state.status = 'success';
            state.produits.push(action.payload);
        })
        .addCase(addProduit.rejected, (state, action) => {
            state.status = 'failed';
            if (Array.isArray(action.payload)) {
                state.validationEroor = action.payload;
            }
            else {
                state.error = action.payload;
            }
        })

}