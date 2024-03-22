import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

const getAdvertisement = async () => {
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
        console.log('Product get from product successfully!');
        return response.data;
    } catch (error) {
        console.error('Failed to Product get from product:', error);
    }
}
export default getAdvertisement;
