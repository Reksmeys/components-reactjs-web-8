import axios from "axios"
import { BASE_URL } from "../constant/baseURL"

export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}categories/`)
    return response
}

export const fetchProducts = async () => {
   const response = await fetch(`${BASE_URL}products`)
   return response
}

export const fetchDetailProduct = async (myid) => {
    const response = await fetch(`${BASE_URL}products/${myid}`)
    return response
}

// insert all product information to API
export const insertProductToAPI = async (product) => {
    const response =  await fetch(`${BASE_URL}products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return response
}

// upload file like image
export const uploadFile = async (image) => {
    const response = await axios(`${BASE_URL}files/upload`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data"
        },
        data: image
    })
    return response
}