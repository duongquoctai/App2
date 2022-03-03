import { createAsyncThunk } from "@reduxjs/toolkit"
import { userAPI } from "api/Users"

const NAME_SPACE = "userInfo"

export const fetchUsers = createAsyncThunk(
    `${NAME_SPACE}/fetchUsers`,
    async () => {
        const response = await userAPI.getUsers()
        return response
    }
)