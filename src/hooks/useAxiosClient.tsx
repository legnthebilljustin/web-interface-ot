import { StorageKeys } from "../constants/keys";
import axios, { AxiosError, AxiosResponse } from "axios"

const API_URL = {
    DEVELOPMENT: "http://127.0.0.1:8000/api"
}

localStorage.setItem(StorageKeys.TOKEN, '2|koX481Ttc31ia3VYXHnReIE7v6zMZF9g8h8gzYhQ0f1fcd98')

const authToken = localStorage.getItem(StorageKeys.TOKEN)

export const axiosClient = axios.create({
    baseURL: API_URL.DEVELOPMENT,
    headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export const setAuthorizationHeader = (userToken: string) => {
    axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`
}

axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },

    function (error: AxiosError) {
        return error;
    }
)