import { loginSlice } from "../slice/loginSlice";
const { configureStore } = require("@reduxjs/toolkit");
const { courseSlice } = require("../slice/courseSlice");


let myStore = configureStore({
    reducer: {
        loginStore: loginSlice.reducer,
        courseStore: courseSlice.reducer
    }
})

export default myStore;