import { createSlice } from "@reduxjs/toolkit";

const globleSlice = createSlice({
    name: "globle",
    initialState: {
        routeNmae: null
    },
    reducers: {
        getRoutename: (state, action) => {
            state.routeNmae = action.payload as any

            // console.log("From the Rdux State here.", state.routeNmae);

        }
    }
})

export const { getRoutename } = globleSlice.actions
export default globleSlice.reducer