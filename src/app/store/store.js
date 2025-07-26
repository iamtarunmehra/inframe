const { configureStore } = require("@reduxjs/toolkit");
const { courseSlice } = require("../slice/courseSlice");

let myStore = configureStore({
    reducer: {
        courseStore: courseSlice.reducer
    }
})

export default myStore;