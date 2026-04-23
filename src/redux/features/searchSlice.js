import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        query : "",
        activeTab : "photos",
        results : [],
        loading : false,
        error : null
    }, 
    reducers : {
        setQuery(state, actions){
            state.query = actions.payload
        },
        setActiveTab(state, actions){
            state.activeTab = actions.payload
        },
        setResults(state, actions){
            state.results = actions.payload
        },
        setLoading(state, actions){
            state.loading = actions.payload
        },
        setError(state, actions){
            state.error = actions.payload
        },
    }
})

export const {setQuery, setActiveTab, setResults, setLoading, setError} = searchSlice.actions
export default searchSlice.reducer