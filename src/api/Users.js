import { axiosClient } from "./axiosClient"

export const userAPI = {
    getUsers: () => {
        const url = "/users"
        return axiosClient.get(url)
    }

}
