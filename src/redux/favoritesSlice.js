import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const exists = state.favoriterecipes.find(
        (item) => item.idFood === recipe.idFood
      );

      if (exists) {
        // Remove it if it already exists
        state.favoriterecipes = state.favoriterecipes.filter(
          (item) => item.idFood !== recipe.idFood
        );
      } else {
        // Add it if it doesn't exist
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
