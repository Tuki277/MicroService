import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../common/api";
import { ICategory, ICategoryDto } from "../../common/interface/CategoryInterface";
import { IResponse } from "../../common/interface/ResponeInterface";

interface CodeState {
    loading: boolean;
    error: string | null | boolean;
    data: IResponse<ICategory> | null;
    count: number;
    message: string | null;
}

export const getAllCode = createAsyncThunk("Code/GetAll", async (input, thunkApi) => {
    try {
        const res = await api.get(`/code`,);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const addCode = createAsyncThunk("Code/Post", async(input: any, thunkApi) => {
    try {
        const res = await api.post('/code', input);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const updateCode = createAsyncThunk("Code/Update", async(input: any, thunkApi) => {
    try {
        console.log({ input })
        const res = await api.put(`/code/${input.id}`, input.data);
        return res.data;
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

export const deleteCode = createAsyncThunk("Code/Delete", async(id: string, thunkApi) => {
    try {
        const res = await api.delete(`/code/${id}`);
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

const codeSlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCode.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.count = action.payload.count;
            state.message = action.payload.message;
        });
        builder.addCase(deleteCode.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(addCode.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(updateCode.fulfilled, (state, action) => {
            state.error = false;
        })
    }
})

export const codeReducer = codeSlice.reducer;