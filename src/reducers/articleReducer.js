import { createSlice } from "@reduxjs/toolkit";

const articleReducer = createSlice({
    name: "articles",
    initialState: {articles: []},
    reducers: {
        getArticles(state, action){
            state.articles = action.payload
        }
    }
})

export const articlesActions = articleReducer.actions;
export default articleReducer;