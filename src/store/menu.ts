import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import menusService from '../services/api/menus';
import { MenuDataTypes, MenuItem} from '../services/api/menus/types';


// Entity
const menusAdapter = createEntityAdapter<MenuDataTypes> ({
    selectId: (menus) => menus.code,
})

const mainHeaderItemAdapter = createEntityAdapter<MenuItem> ({
    selectId: (menuItem) => menuItem.id,
})

// Thunk
export const menusAsync = createAsyncThunk<
    MenuDataTypes[],
    undefined
>('menus/list', async (_, { rejectWithValue }) => {
    try {
        const response = await menusService();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Slice
export const menusSlice = createSlice({
    name: 'menus',
    initialState:menusAdapter.getInitialState({
        mainHeaderLevel1:mainHeaderItemAdapter.getInitialState(),
        mainHeaderLevel2:mainHeaderItemAdapter.getInitialState()
    }),
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(menusAsync.fulfilled, (state, action) => {
            menusAdapter.setAll(state,action.payload)
            mainHeaderItemAdapter.setAll(state.mainHeaderLevel1,action.payload[0].items.filter(e=>e.depth===1))
            mainHeaderItemAdapter.setAll(state.mainHeaderLevel2,action.payload[0].items.filter(e=>e.depth===2))
        });
    },
});


export default menusSlice.reducer;

export const menusSelect = menusAdapter.getSelectors()
