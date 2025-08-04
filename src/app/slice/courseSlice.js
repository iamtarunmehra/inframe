import { createSlice } from "@reduxjs/toolkit";

export let courseSlice = createSlice({
    name: 'courseData',
    initialState: {
        courseData: [],
    },
    reducers: {
        courseData: function (state, reqData) {
            state.courseData = reqData.payload
        },

    }
})

export const { courseData } = courseSlice.actions
export default courseSlice.reducer

