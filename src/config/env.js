import {DEV_BACKEND_URL} from '@env';
import { Platform} from "react-native";
const devEnvironmentVariables = {
  
  BACKEND_URL: DEV_BACKEND_URL
};

const prodEnvironmentVariables = {
  BACKEND_URL: DEV_BACKEND_URL
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
