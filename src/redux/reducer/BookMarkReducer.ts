import { createSlice } from "@reduxjs/toolkit";
import { BookMarkType } from "../../api/Type";
import { getAllBookMark } from "../thunks/BookMarkThunks";

interface BookMarkState{
    isRefesh:boolean,
    listBookMark:BookMarkType[]
}

const initialState:BookMarkState = {
    isRefesh:false,
    listBookMark:[]
}

export const bookmarkSlice = createSlice({
    name:'bookMarkSlice',
    reducers:{},
    initialState: initialState,
    extraReducers: builder => {
        builder.addCase(getAllBookMark.pending, (state,action)=>{
            state.isRefesh = true
        }),
        builder.addCase(getAllBookMark.fulfilled,(state,action) => {
            state.listBookMark = action.payload
            state.isRefesh = false
        })
    }
})
