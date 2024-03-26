import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

export const getAllAdvertisement = async () => {
    try {
        const response = await axiosInstance.get('v1/advertisements/getAllAdvertisement');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
export async function findByIdProduct(productId: String): Promise<void> {
    try {
        // Send the product id to the server to remove it from favorites
       const response = await axios.get(`http://localhost:8080/product/get?id=${productId}`);

        return response.data;
    } catch (error) {
        console.error('Failed to Product get from product:', error);
    }
}

export async function getByUserIdAdvert(userId): Promise<void> {
    try {
        // Send the product id to the server to remove it from favorites
       const response = await axiosInstance.get(`http://localhost:8080/v1/advertisements/getAdvertisement?id=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to Product get from product:', error);
    }
}

export async function sendAdvertisement(advert: any): Promise<void> {
    try {
        // Send the product id to the server to remove it from favorites
        const response = await axiosInstance.post('v1/advertisements/add', advert);
        console.log("succesfully added");
        return response.data;
    } catch (error) {
        console.error('Failed to add product to adver:', error);
    }
}