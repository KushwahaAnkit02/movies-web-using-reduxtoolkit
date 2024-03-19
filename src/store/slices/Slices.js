import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../Api";

export const getDataFromApi = createAsyncThunk('movies', async (data, { rejectWithValue }) => {

    try {
        const response = await getData(data)
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const slices = createSlice({
    name: "Movies",
    initialState: {
        movies: [],
        trailers: [],
        upcoming: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataFromApi.pending, (state) => {
                state.loading = true
            })
        builder
            .addCase(getDataFromApi.fulfilled, (state, action) => {
                console.log(action.payload.movies, 'upcoming');
                state.loading = false
                if (action.payload.movies) {
                    state.movies = action.payload.movies

                } else if (action.payload.trailers) {
                    state.trailers = action.payload.trailers
                } else if (state.payload.movies.list) {
                    state.upcoming = action.payload.movies
                }
            })
        builder
            .addCase(getDataFromApi.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

