import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

interface IMetaState {
  theme: 'dark' | 'light';
  isLoading: boolean;
}

const initialState: IMetaState = {
  theme: 'light',
  isLoading: false,
};

export const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.theme = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectMeta = (state: RootState) => state.common.meta;
export const selectTheme = (state: RootState) => selectMeta(state).theme;
export const selectLoading = (state: RootState) => selectMeta(state).isLoading;

export default metaSlice.reducer;
