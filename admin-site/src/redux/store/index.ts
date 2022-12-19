import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "../features/category";
import { codeReducer } from "../features/code";
import { productReducer } from "../features/product";
import { systemReducer } from "../features/system";

export const store = configureStore({
    reducer: {
        system: systemReducer,
        category: categoryReducer,
        code: codeReducer,
        product: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;