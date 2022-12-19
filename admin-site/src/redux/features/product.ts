import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../common/api";
import { ICategory } from "../../common/interface/CategoryInterface";
import { IResponse } from "../../common/interface/ResponeInterface";

interface CodeState {
    loading: boolean;
    error: string | null | boolean;
    data: IResponse<ICategory> | null;
    count: number;
    message: string | null;
}

export const getAllProduct = createAsyncThunk("Product/GetAll", async (input, thunkApi) => {
    try {
        const res = await api.get(`/product`,);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const addProduct = createAsyncThunk("Product/Post", async(input: any, thunkApi) => {
    try {
        const res = await api.post('/product', input);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const updateProduct = createAsyncThunk("Product/Update", async(input: any, thunkApi) => {
    try {
        console.log({ input })
        const res = await api.put(`/product/${input.id}`, input.data);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const deleteProduct = createAsyncThunk("Product/Delete", async(id: string, thunkApi) => {
    try {
        const res = await api.delete(`/product/${id}`);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

const initialState = {
    loading: true,
    error: null,
    data: null,
    message: null,
    count: 0,
} as CodeState;

const productSlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.count = action.payload.count;
            state.message = action.payload.message;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.error = false;
        })
    }
})

export const productReducer = productSlice.reducer;