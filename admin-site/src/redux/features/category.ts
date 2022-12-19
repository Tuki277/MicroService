import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../common/api";
import { ICategory, ICategoryDto } from "../../common/interface/CategoryInterface";
import { IResponse } from "../../common/interface/ResponeInterface";

interface CategoryState {
    loading: boolean;
    error: string | null | boolean;
    data: IResponse<ICategory> | null;
    count: number;
    message: string | null;
}

export const getAllCategory = createAsyncThunk("Category/GetAll", async (input, thunkApi) => {
    try {
        const res = await api.get(`/category`,);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const addCategory = createAsyncThunk("Category/Post", async(input: ICategoryDto, thunkApi) => {
    try {
        const res = await api.post('/category', input);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const updateCategory = createAsyncThunk("Category/Update", async(input: any, thunkApi) => {
    try {
        console.log({ input })
        const res = await api.put(`/category/${input.id}`, input.data);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const getDetailCategoryById = createAsyncThunk("Category/GetById", async(id: string, thunkApi) => {
    try {
        const res = await api.get(`/category/${id}`);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const deleteCategory = createAsyncThunk("Category/Delete", async(id: string, thunkApi) => {
    try {
        const res = await api.delete(`/category/${id}`);
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
} as CategoryState;

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.count = action.payload.count;
            state.message = action.payload.message;
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.error = false;
        })
    }
})

export const categoryReducer = categorySlice.reducer;