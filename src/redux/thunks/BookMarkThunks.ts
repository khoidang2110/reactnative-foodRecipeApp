import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookMarkType } from "../../api/Type";
import storage from "../../storage/storage";
import { STORAGE_KEY } from "../../constant/constant";

export const getAllBookMark = createAsyncThunk(
    'bookmark/getAll',
    async () => {
        const listBookmark = await storage.load({key:STORAGE_KEY.bookmark}) as BookMarkType[]
        return listBookmark
    }
)