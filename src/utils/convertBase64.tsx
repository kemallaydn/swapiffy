import RNFS from 'react-native-fs';

export const convertToBase64 = async (imagePath) => {
  try {
    const imageData = await RNFS.readFile(imagePath, 'base64');
    return imageData;
  } catch (error) {
    console.error('Error converting image to Base64:', error);
  }
};